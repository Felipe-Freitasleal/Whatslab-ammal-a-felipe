import React from "react"
import {Div, Img} from "./styledHeader"

function Header (props) {
    

    return(
        <Div>
            <Img src="https://picsum.photos/200/200" alt="foto usuário"/>
            <div>
                <select value={props.currSender} onChange={props.onChangeSender}>
                    {props.senders.map((sender) => (
                        <option key={sender} value={sender}>
                        {sender}
                        </option>
                    ))}
                </select>   
                <p>Online</p>      
            </div>
        </Div>
    )
}

export default Header