import { inserirConjunto, getAllConjuntos } from "../models/medicamentosModel";

export const listConjuntos = async () => {
  return await getAllConjuntos();
};

export const criarConjunto = async (data: {
  organizacao: string;
  nome: string;
  descricao: string;
  tags: string;
  quantidade_recursos: number;
  quantidade_reusos: number;
  quantidade_downloads: number;
  quantidade_seguidores: number;
}) => {
  return await inserirConjunto(data);
};
