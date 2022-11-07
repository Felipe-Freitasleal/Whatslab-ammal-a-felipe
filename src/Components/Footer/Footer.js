import React from "react"
import {Div, Button, Input} from "./styledFooter"

function Footer (props) {

    return(
        <Div>
            <Input type="text" placeholder="escrever mensagem" onKeyDown={props.onChangeMessage}/>
            <Button>Enviar</Button>
        </Div>
    )
}

export default Footer