import { Router } from "express";
import { getConjuntos } from "../controllers/conjuntoDadosController";

const router = Router();

router.get("/conjuntos", getConjuntos);

export default router;
