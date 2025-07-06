import { db } from "../config/database";

// Inserir um novo conjunto de dados
export const inserirConjunto = async (
  organizacao: string,
  nome: string,
  descricao: string,
  tags: string,
  quantidade_recursos: number,
  quantidade_reusos: number,
  quantidade_downloads: number,
  quantidade_seguidores: number
) => {
  const result = await db.query(
    `INSERT INTO conjunto_dados 
      (organizacao, nome, descricao, tags, quantidade_recursos, quantidade_reusos, quantidade_downloads, quantidade_seguidores)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING *`,
    [
      organizacao,
      nome,
      descricao,
      tags,
      quantidade_recursos,
      quantidade_reusos,
      quantidade_downloads,
      quantidade_seguidores,
    ]
  );

  return result.rows[0];
};

// Obter todos os conjuntos de dados
export const getAllConjuntos = async () => {
  const result = await db.query("SELECT * FROM conjunto_dados");
  return result.rows;
};
