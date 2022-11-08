import React from "react"
import {Div, H4} from "./styledInterlocutor"

function Interlocutor (props) {
 const {pessoas, mensagens} = props
    return(
        <Div>
            <H4>{pessoas}</H4>
            <p>{mensagens}</p>
        </Div>
    )
}

export default Interlocutor