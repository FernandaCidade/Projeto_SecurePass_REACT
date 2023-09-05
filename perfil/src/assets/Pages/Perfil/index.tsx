import * as React from 'react';
import { useState } from 'react';
// import './index.css'
// import fakeData from './'; Aqui vamos importar a API 



function Perfil(){
    function informacaoUsuario (){
        const [usuers, Setusuers] = useState<string[]>(
            matricula: 1231720,
            nome: Thiago Nascimento,
            area: Chao de Fabrica,
            dataNascimento: 28/08/1998,
            funcao: Chefe chao de fabrica,
            sessao: 304,
            id: 1
        );
        
    }
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Matricula</th>
                        <th>Nome</th>
                        <th>Area</th>
                        <th>Data de Nascimento</th>
                        <th>Função</th>
                        <th>Sessão</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    
    );
}export default Perfil;
