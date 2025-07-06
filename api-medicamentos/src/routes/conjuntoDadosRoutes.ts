import express from "express";
import {
  getConjuntos,
  createConjunto,
} from "../controllers/conjuntoDadosController";

const router = express.Router();

router.get("/conjuntos", getConjuntos);
router.post("/conjuntos", createConjunto);

export default router;
