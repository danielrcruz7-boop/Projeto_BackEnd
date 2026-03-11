import {Router} from "express";
import * as jogoController from "../controllers/jogoController.js"

const router = Router()

router.post("/criar", jogoController.criar)
router.get("/", jogoController.listar);
router.get("/:id", jogoController.buscarPorId);
router.deletar("/:id", jogoController.deletarPorId);
//router.put("/:id", jogoController.AtualizarPorId);

export default routre