
import { useState } from "react";
import "./style.css"
// import './index.css'
// import api from "../../utils/db.json"; necessário localizar a API 

import CardPerfil from "../../Componentes/CardPerfil";



function Perfil(){

    const [users, setUsers] = useState<any[]>([
        {

        // img_perfil: "../assets/img/img_perfil.png",
        // matricula: 1231720,
        // nome: "Thiago Nascimento",
        // area: "Chao de Fabrica",
        // dataNascimento: "28/08/1998",
        // funcao: "Chefe chao de fabrica",
        // sessao: 304,
        // id: 1
        }
    ]);

    function listarDesenvolvedores(){
        api.get("users").then((resposta: any) =>{
            console.log(resposta.data)
            setUsers(resposta.data);
        })

    }
    
    return(
        <>
         
        <div>
         
            <div className='emglobador'>
                  <h2>Perfil</h2>
                {/* adicionar imagem do usuario aqui */}
                <span>#administrador</span>
                <hr />
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
                        <tbody className="direita">
                        

                         {users.map((dev: any, index: number) => {
                            return <li key={index}>
                                   <CardPerfil
                                   id={dev.id}
                                   matricula={dev.matricula}
                                   nome={dev.nome}
                                   area={dev.area}
                                   dataNascimento={dev.dataNascimento}
                                   funcao={dev.funcao}
                                   sessao={dev.sessao}

                                   />
                                 </li>
                        }
                        )}
                       
                    </tbody>
                </table>
                <hr />
             </div>
            </div>
        </>
      
    );
}export default Perfil;
