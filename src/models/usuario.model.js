import banco from '../db/database.js';
let conexao = new banco();

export default class UsuarioModel {
    
    #id;
    #nome;
    #email;
    #idade;

    constructor (id, nome, email, idade) {
        this.#id = id;
        this.#nome = nome;
        this.#email = email;
        this.#idade = idade;
    }

    get id () {
        return this.#id;
    }

    set id (value) {
        this.#id = value;
    }

    get nome () {
        return this.#nome;
    }

    set nome (value) {
        return this.#nome = value;
    }

    get email () {
        return this.#email;
    }

    set email (value) {
        return this.#email = value;
    }

    get idade () {
        return this.#idade;
    }

    set idade (value) {
        return this.#idade = value;
    }

    async criar() {
        let sql = "INSERT INTO tb_usuario(usu_nome, usu_email, usu_idade) VALUES (?,?,?)";
        let valores = [this.#nome, this.#email, this.#idade];

        let resultado = await conexao.ExecutaComandoNonQuery(sql, valores);
        return resultado;
    }

    

}