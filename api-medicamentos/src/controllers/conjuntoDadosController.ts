import { Request, Response } from "express";
import { db } from "../config/database";

export const getConjuntos = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { nome } = req.query;

  try {
    if (nome) {
      const result = await db.query(
        "SELECT * FROM conjunto_dados WHERE nome ILIKE $1",
        [`%${nome}%`]
      );
      res.status(200).json(result.rows);
      return;
    }

    const result = await db.query("SELECT * FROM conjunto_dados");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar dados" });
  }
};

export const createConjunto = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { nome } = req.body;

  if (!nome) {
    res.status(400).json({ error: "O campo 'nome' é obrigatório." });
    return;
  }

  try {
    const result = await db.query(
      "INSERT INTO conjunto_dados (nome) VALUES ($1) RETURNING *",
      [nome]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar conjunto de dados" });
  }
};
