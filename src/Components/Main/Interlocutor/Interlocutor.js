import React from "react"
import {Div, H4} from "./styledInterlocutor"

function Interlocutor (props) {
    const {mensagem, noDoubleClick} = props

    return(
        <Div onDoubleClick={() => noDoubleClick(mensagem.id)}>
            <H4>{mensagem.sender}</H4>
            <p>{mensagem.message}</p>
            <span>{mensagem.create}</span>
        </Div>
    )
}

export default Interlocutor