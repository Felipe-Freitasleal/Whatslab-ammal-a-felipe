import React from "react"
import {Div, H4} from "./styledusuario"

function Usuario (props) {

    return(
        <Div>
            <p>{props.arrayDeMensagens.message}</p>
        </Div>
    )
}

export default Usuario