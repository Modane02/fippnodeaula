import UsuarioModel from "../models/usuario.model.js";

export default class UsuarioController{
    async criar(req, res) {
        let { nome, email, idade } = req.body;

        if (nome && email && idade) {
            let usuarioModel = new UsuarioModel("",nome,email,idade);
            let usuarioCriar = await usuarioModel.criar();

            if (usuarioCriar) {
                res.status(200).json({
                    ok: true,
                    msg: "Usuario Criado"
                });
            } else {
                res.status(404).json({ok: false, msg: "Usuários não encontrados!"});
            }
        } else {
            res.status(400).json(({
                ok: false,
                msg: "Parametros inválidos"
            }))
        }

    }
}
