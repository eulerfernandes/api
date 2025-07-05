import { inserirConjunto, getAllConjuntos } from "../models/conjuntoDadosModel";

export const listConjuntos = async () => {
  return await getAllConjuntos();
};

export const criarConjunto = async (nome: string, descricao: string) => {
  return await inserirConjunto(nome, descricao);
};
