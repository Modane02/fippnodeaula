import express from 'express';
import UsuarioController from '../controllers/usuario.controller.js';

const router = express.Router();
const ctrl = new UsuarioController();

router.post("/criar", ctrl.criar);
router.get("/listar", ctrl.listar);
router.get("/buscar/:id", ctrl.buscar);
router.delete("/delete/:id", ctrl.deletar);
router.put("/update", ctrl.update);

export default router;