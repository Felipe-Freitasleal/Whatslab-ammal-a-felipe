import React from "react"
import {Div, H4} from "./styledusuario"

function Usuario (props) {

    return(
        <Div>
            <H4>{props.currSender}</H4>
            <p>{props.message}</p>
        </Div>
    )
}

export default Usuario