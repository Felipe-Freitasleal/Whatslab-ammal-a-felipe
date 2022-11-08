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

  const [arrayDeMensagens, setArrayDeMensagens] = useState ([
    {
      id: `Fulano-${Math.ceil(Math.random() * 1000000)}`,
      sender: "Fulano",
      message:"Hello",
      create: new Date()
    },
    {
      id: `Me-${Math.ceil(Math.random() * 1000000)}`,
      sender: "Me",
      message:"Salve",
      create: new Date()
    }
  ])

  const onChangeMessage = (event) => {
    if(event.key === "Enter"){
      setMessage(event.target.value)
      // setArrayDeMensagens(
      //   {
      //   id: `Fulano-${Math.ceil(Math.random() * 1000000)}`,
      //   sender: currSender,
      //   message:message,
      //   create: new Date()
      // }
      // )
      
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
        arrayDeMensagens={arrayDeMensagens}
      />
      <Footer
        onChangeMessage={onChangeMessage}
      />
    </Div>
  );
}

export default App;
