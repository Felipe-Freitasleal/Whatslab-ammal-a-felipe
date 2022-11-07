import React from "react"
import {Div} from "./styledusuario"

function Usuario (props) {

    return(
        <Div>
            <section>{props.currSender}</section>
        </Div>
    )
}

export default Usuario