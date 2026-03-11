import { conexao } from "../config/db";
import {atualizarPorId} from "../controllers/jogoController.js"

export async function listarJogos(){
    const [resultado] = await conexao.query(
        "SELECT id, nome, email, criando_em FROM usuarios ORDER BY id DESC"
    );
    return resultado
}

export async function buscarPorId(id){
    const [resultado] = await conexao.query(
        "SELECT id, nome, email, criando_em FROM jogos WHERE id = ?",
        [id]
    );
    return resultado [0]
}

export async function criarJogo({nome, email, senha_hash}){
    const [resultado] = await conexao.query(
        'INSERT INTO jogos (nome, genero)'
    )
}