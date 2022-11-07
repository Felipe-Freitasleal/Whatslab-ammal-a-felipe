import React from "react"
import {Div} from "./styledMain"
import Usuario from "./Usuario/Usuario"
import Interlocutor from "./Interlocutor/Interlocutor"

function Main (props) {

    return(
        <Div>
        {props.currSender === "Me" ? 
        (<Usuario
            currSender={props.currSender}
        />) 
            :
        ( <Interlocutor
            currSender={props.currSender}
        />)}
      </Div>
    )
}





export default Main