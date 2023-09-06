import * as React from 'react';
import { useState } from 'react';
import "./style.css"
// import fakeData from './'; Aqui vamos importar a API 



function Perfil(){

    function informacaoUsuario (){

       
        
        const [users, Setusers] = useState<any[]>([
            {
            img_perfil: "Foto_perfil.png",
            nome: "Thiago Nascimento",
            area: "Chao de Fabrica",
            dataNascimento: "28/08/1998",
            funcao: "Chefe chao de fabrica",
            sessao: 304,
            id: 1
            }
        ])
    
    }

    const colunas = [

        {
            title: 'Nome',
            field: 'nome'
        },

        {
            title: 'Area',
            field: 'area'
        },
        {
            title: 'Data de Nascimento',
            field: 'dataNascimento'
        },
        {
            title: 'Função',
            field: 'funcao'
        },
        {
            title: 'Sessão',
            field: 'sessao'
        },
       
    ]


    return(
        <div>
            <div className='emglobador'>
                <span>#ADM</span>
                <table className='tabelaPerfil'>
                    <thead className='esquerda'>
                        <tr>
                            <th>Matricula</th>
                            <th>Nome</th>
                            <th>Area</th>
                            <th>Data de Nascimento</th>
                            <th>Função</th>
                            <th>Sessão</th>
                        </tr>
                    </thead>
                    <tbody className='direita'>
                        <td> {users} </td>
                    </tbody>
                </table>
            </div>
    </div>
    );
}export default Perfil;
