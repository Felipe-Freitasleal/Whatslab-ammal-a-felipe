import React from "react"
import {Div, H4} from "./styledInterlocutor"

function Interlocutor (props) {

    return(
        <Div>
            <H4>{props.currSender}</H4>
            <p>{props.message}</p>
        </Div>
    )
}

export default Interlocutor