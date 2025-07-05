import { Request, Response } from "express";
import { listConjuntos, criarConjunto } from "../services/conjuntoDadosService";

export const getConjuntos = async (req: Request, res: Response) => {
  try {
    const conjuntos = await listConjuntos();
    res.status(200).json(conjuntos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados" });
  }
};

export const postConjunto = async (req: Request, res: Response) => {
  const { nome, descricao } = req.body;

  if (!nome) {
    res.status(400).json({ error: "O campo 'nome' é obrigatório." });
    return;
  }

  try {
    const novoConjunto = await criarConjunto(nome, descricao);
    res.status(201).json(novoConjunto);
  } catch (error) {
    res.status(500).json({ error: "Erro ao inserir dados" });
  }
};
