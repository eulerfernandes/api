import { Request, Response } from "express";
import { inserirConjunto, getAllConjuntos } from "../models/medicamentosModel";

export const getConjuntos = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { nome } = req.query;

  try {
    const result = await getAllConjuntos();

    if (nome) {
      const filtrados = result.filter((item) =>
        item.nome.toLowerCase().includes((nome as string).toLowerCase())
      );
      res.status(200).json(filtrados);
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar dados" });
  }
};

export const createConjunto = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    organizacao,
    nome,
    descricao,
    tags,
    quantidade_recursos,
    quantidade_reusos,
    quantidade_downloads,
    quantidade_seguidores,
  } = req.body;

  if (!nome || !descricao) {
    res
      .status(400)
      .json({ error: "Os campos 'nome' e 'descricao' são obrigatórios." });
    return;
  }

  try {
    const novoConjunto = await inserirConjunto({
      organizacao: organizacao || null,
      nome,
      descricao,
      tags: tags || null,
      quantidade_recursos: quantidade_recursos || 0,
      quantidade_reusos: quantidade_reusos || 0,
      quantidade_downloads: quantidade_downloads || 0,
      quantidade_seguidores: quantidade_seguidores || 0,
    });

    res.status(201).json(novoConjunto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar conjunto de dados" });
  }
};
