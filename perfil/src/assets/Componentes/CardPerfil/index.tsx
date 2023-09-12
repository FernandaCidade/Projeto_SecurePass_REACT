
export default function CardPerfil(props: any){


    return (
        
            <div className="users">
            <tr>
                 <th>{props.matricula}</th> 
                 <th>{props.nome}</th> 
                 <th>{props.area}</th> 
                 <th>{props.dataNascimento}</th> 
                 <th>{props.funcao}</th> 
                 <th>{props.sessao}</th> 
                 </tr>
             </div>
       
    )
}