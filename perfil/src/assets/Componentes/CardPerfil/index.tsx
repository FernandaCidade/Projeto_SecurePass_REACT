import Perfil from "../../Pages/Perfil"

export default function CardPerfil(props: any){


    return (
        

            <div className="techs">
            
                 <th>{props.matricula}</th> 
                 <th>{props.nome}</th> 
                 <th>{props.area}</th> 
                 <th>{props.dataNascimento}</th> 
                 <th>{props.funcao}</th> 
                 <th>{props.sessao}</th> 
                
             </div>
       
    )
}