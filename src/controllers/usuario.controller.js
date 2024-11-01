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

    async listar(req, res) {
        let usuarioModel = new UsuarioModel("","","","");
        let usuarios = await usuarioModel.listar();

        if(usuarios.length > 0) {
            res.status(200).json({
                ok: true,
                data: usuarios
            });
        } else {
            res.status(404).json({
                ok: false,
                msg : "Usuários não Encontrados!"
            })
        }
    }

    async buscar (req, res) {
        let { id } = req.params;
        if (id) {
            let usuarioModel = new UsuarioModel(id,"","","");
            let usuario = await usuarioModel.buscar();

            if(usuario.length > 0) {
                res.status(200).json({
                    ok: true,
                    data: usuario
                })
            }else{
                res.status(400).json({
                    ok : false,
                    msg : "Usuário não encontrado!"
                })
            }

        } else {
            res.status(404).json({
                ok: false,
                msg: "Está faltando o ID"
            })
        }
    }

    async deletar(req, res) {
        let {id} = req.params;
        if(id) {
            let usuarioModel = new UsuarioModel(id, "","","");
            let usuario = await usuarioModel.deletar();
            if(usuario) {
                res.status(200).json({
                    ok: true,
                    msg: "Usuario deletado com sucesso"
                })
            }else {
                res.status(400).json({
                    ok: false,
                    msg: "Erro ao deletar o usuário"
                })
            }
        }else {
            res.status(404).json({
                ok: false, 
                msg: "Faltou o ID!"
            })
        }
    }

    async update(req, res) {
        let { id, nome, email, idade } = req.body;
        if(id && nome && email && idade) {
            let usuarioModel = new UsuarioModel(id, nome, email, idade);
            let usuario = await usuarioModel.update();

            if(usuario) {
                res.status(200).json({
                    ok: true,
                    msg: "Usuário alterado com sucesso!"
                })
            }else {
                res.status(400).json({
                    ok: false,
                    msg: "Erro ao alterar o usuário"
                })
            }
        }else {
            res.status(404).json({
                ok: false,
                msg: "Parâmetros inválidos"
            })
        }
    }
}
