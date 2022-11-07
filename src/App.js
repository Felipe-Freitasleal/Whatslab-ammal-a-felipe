import {Div} from "./Styled-App"
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { useState } from "react";


function App() {
  //Remetente atual
  const [currSender, setCurrSender] = useState ("Me")
  //possiveis remeentes 
  const [senders, setSenders] = useState ([
    "Me",
    "Fulano",
    "Cicrano",
    "Beltrano"
  ])
  const [message, setMessage] = useState ("")

  //Mudar o remetente atual
  const onChangeSender = (event) =>{
    setCurrSender(event.target.value)
  }

  // const [arrayDeMensagens, setArrayDeMensagens] = useState [{}]

  const onChangeMessage = (event) => {
    if(event.key === "Enter"){
      
      setMessage(event.target.value)
    }
  }

  return (
    <Div>
      <Header
        currSender={currSender} 
        onChangeSender={onChangeSender} 
        senders={senders}
      />
      <Main
        currSender={currSender} 
        message={message}
      />
      <Footer
        onChangeMessage={onChangeMessage}
      />
    </Div>
  );
}

export default App;
