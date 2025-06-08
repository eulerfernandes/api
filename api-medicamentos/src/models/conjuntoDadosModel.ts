import { db } from "../config/database";

export const getAllConjuntos = async () => {
  const result = await db.query("SELECT * FROM conjunto_dados");
  return result.rows;
};
