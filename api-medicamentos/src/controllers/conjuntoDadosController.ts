import { Request, Response } from "express";
import { listConjuntos } from "../services/conjuntoDadosService";

export const getConjuntos = async (req: Request, res: Response) => {
  try {
    const dados = await listConjuntos();
    res.status(200).json(dados);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar os dados." });
  }
};
