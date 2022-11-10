import React from "react"
import {Div, Button, Input} from "./styledFooter"
import { useState } from "react"

function Footer (props) {
    const {onChangeMessage} = props

    const [ text, setText] = useState("")

    const onChangeTexto = (event) => {
        setText(event.target.value)
    }

    function clearText () {
        setText("")
    }

    return(
        <Div>
            <Input value={text} placeholder="escrever mensagem" onChange={onChangeTexto} onKeyDown={(event) => onChangeMessage(event, text, clearText)}/>
            <Button>Enviar</Button>
        </Div>
    )
}

export default Footer