// controllers/conjuntoDadosController.ts

import { Request, Response } from "express";
import { db } from "../config/database";

export const getConjuntos = async (req: Request, res: Response) => {
  try {
    const result = await db.query("SELECT * FROM conjunto_dados");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    res.status(500).json({ error: "Erro ao buscar dados" });
  }
};
