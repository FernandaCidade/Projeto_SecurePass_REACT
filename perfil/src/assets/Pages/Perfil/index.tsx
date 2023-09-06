
import { useState } from "react";
import "./style.css"
// import './index.css'
import api from "../../utils/api";



function Perfil(){

    const [users, Setusers] = useState<any[]>([
        {

        img_perfil: "Foto_perfil.png",
        matricula: 1231720,
        nome: "Thiago Nascimento",
        area: "Chao de Fabrica",
        dataNascimento: "28/08/1998",
        funcao: "Chefe chao de fabrica",
        sessao: 304,
        id: 1
        }
    ])

    
    return(
        <>
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
                        <tbody className="direita">
                        

                         {users.map((dev: any, index: number) => {
                            return <li key={index}>
                                    <td>{dev.id}</td>
                                   <td>{dev.area}</td>
                                    <td>{dev.nome}</td>
                                    <td>{dev.matricula}</td>
                                   <td> {dev.dataNascimento}</td>
                                 </li>
                        }
                        )}
                       
                    </tbody>
                </table>
             </div>
            </div>
        </>
      
    );
}export default Perfil;
