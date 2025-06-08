import express from "express";
import conjuntoDadosRoutes from "./routes/conjuntoDadosRoutes";
import dotenv from "dotenv";
import { db } from "./config/database";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Testar conexão com o banco
db.connect()
  .then(() => {
    console.log("✅ Conectado ao banco de dados PostgreSQL");

    // Rotas
    app.use("/api", conjuntoDadosRoutes);

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Erro ao conectar no banco de dados:", err);
  });
