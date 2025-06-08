import { getAllConjuntos } from "../models/conjuntoDadosModel";

export const listConjuntos = async () => {
  return await getAllConjuntos();
};
