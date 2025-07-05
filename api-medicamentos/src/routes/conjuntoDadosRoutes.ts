import express from "express";
import {
  getConjuntos,
  postConjunto,
} from "../controllers/conjuntoDadosController";

const router = express.Router();

router.get("/conjuntos", getConjuntos);
router.post("/conjuntos", postConjunto);

export default router;
