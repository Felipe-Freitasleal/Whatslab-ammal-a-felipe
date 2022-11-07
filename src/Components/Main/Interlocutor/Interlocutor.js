import React from "react"
import {Div } from "./styledInterlocutor"

function Interlocutor (props) {

    return(
        <Div>
            <section>{props.currSender}</section>
        </Div>
    )
}

export default Interlocutor