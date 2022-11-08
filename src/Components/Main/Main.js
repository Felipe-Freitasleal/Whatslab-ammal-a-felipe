import React from "react"
import {Div, EstiloInterlocutor} from "./styledMain"
import Usuario from "./Usuario/Usuario"
import Interlocutor from "./Interlocutor/Interlocutor"

function Main (props) {
    const {arrayDeMensagens} = props

    return(
     <Div>
        {arrayDeMensagens.map((mensagem) => (
                 <EstiloInterlocutor key={mensagem.id} mensagem={mensagem.sender}>
                    <h2>{mensagem.sender}</h2>
                    <p>{mensagem.message}</p>
                </EstiloInterlocutor>
        ))}
     </Div>
    )
}

{/* <h2>{mensagem.sender}</h2>
                <p>{mensagem.message}</p> */}


                // return if (mensagem.sender === "Me"){
                //     <EstiloInterlocutor>
                //         <Usuario>
                //             pessoas={mensagem.sender}
                //             mensagens={mensagem.message}
                //         </Usuario>
                //     </EstiloInterlocutor>
                //    } else {
                //          <EstiloInterlocutor>
                //             <Interlocutor
                //                 pessoas={mensagem.sender}
                //                 mensagens={mensagem.message}
                //             /> 
                //         </EstiloInterlocutor>
                //    } 

export default Main