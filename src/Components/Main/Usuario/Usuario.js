import React from "react"
import {Div} from "./styledusuario"

function Usuario (props) {
    const {mensagem, noDoubleClick} = props

    return(
        <Div onDoubleClick={() => noDoubleClick(mensagem.id)}>
            <p>{mensagem.message}</p>
            <span>{mensagem.create}</span>
        </Div>
    )
}

export default Usuario