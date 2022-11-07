import React from "react"
import {Div, EstiloUsuario, EstiloInterlocutor} from "./styledMain"
import Usuario from "./Usuario/Usuario"
import Interlocutor from "./Interlocutor/Interlocutor"

function Main (props) {

    return(
     <Div>
        {/* {props.arrayDeMensagens.map((mensagem) => {
           return  */}
            {props.currSender === "Me" ? 
            (
            <EstiloUsuario>
                <Usuario
                currSender={props.currSender} 
                message={props.message}
                />
            </EstiloUsuario>
            ) 
                :
            ( 
            <EstiloInterlocutor>
                <Interlocutor
                currSender={props.currSender} 
                message={props.message}
                />
            </EstiloInterlocutor>
            )}
           
        {/* })} */}
     </Div>
    )
}





export default Main