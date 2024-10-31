import express from 'express';
import UsuarioController from '../controllers/usuario.controller.js';

const router = express.Router();
const ctrl = new UsuarioController();

router.post("/criar", ctrl.criar)

export default router;