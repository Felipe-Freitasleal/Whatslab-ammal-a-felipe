import React from "react"
import {Div, EstiloInterlocutor} from "./styledMain"
import Usuario from "./Usuario/Usuario"
import Interlocutor from "./Interlocutor/Interlocutor"

function Main (props) {
    const {arrayDeMensagens, noDoubleClick} = props

    return(
     <Div>
        {arrayDeMensagens.map((mensagem) => (
                 <div key={mensagem.id} mensagem={mensagem.sender}>
                    {/* {mensagem.sender !== "Me" && <h1>{mensagem.sender}</h1>} */}
                    {mensagem.sender === "Me"? (<Usuario mensagem={mensagem} noDoubleClick={noDoubleClick}/>) : (<Interlocutor mensagem={mensagem} noDoubleClick={noDoubleClick}/>)}
                    {/* <p>{mensagem.message}</p>
                    <div>
                        <span>
                            {mensagem.create}
                        </span>
                    </div> */}
                </div>
        ))}
     </Div>
    )
}

export default Main