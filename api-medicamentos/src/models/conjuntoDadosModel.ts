import { db } from "../config/database";

export const inserirConjunto = async (nome: string, descricao: string) => {
  const result = await db.query(
    "INSERT INTO conjunto_dados (nome, descricao) VALUES ($1, $2) RETURNING *",
    [nome, descricao]
  );
  return result.rows[0];
};

export const getAllConjuntos = async () => {
  const result = await db.query("SELECT * FROM conjunto_dados");
  return result.rows;
};
