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

  //Mudar o remetente atual
  const onChangeSender = (event) =>{
    setCurrSender(event.target.value)
    
  }

  //Lista primária de mensagens
  const [arrayDeMensagens, setArrayDeMensagens] = useState ([
    {
      id: `Fulano-${Math.ceil(Math.random() * 1000000)}`,
      sender: "Fulano",
      message: "mensagem",
      create: new Date().toLocaleTimeString( "en-US", {hour: "numeric", minute: "numeric",hour12: true})
    },
    {
      id: `Me-${Math.ceil(Math.random() * 1000000)}`,
      sender: "Me",
      message: "Algo",
      create: new Date().toLocaleTimeString( "en-US", {hour: "numeric", minute: "numeric",hour12: true})
    }
  ])

  //Adiciona nova mensagems como objeto a partir das informações vindas do footer
  const onChangeMessage = (event, text, cbclearText) => {
    if(event.key === "Enter"){
      const newMessage =
       {
        id: `${currSender}-${Math.ceil(Math.random() * 1000000)}`,
        sender: currSender,
        message: text,
        create: new Date().toLocaleTimeString( "en-US", {hour: "numeric", minute: "numeric", hour12: true})
        }
      
        const newMessages = [...arrayDeMensagens, newMessage]
        setArrayDeMensagens(newMessages)
        cbclearText()
    }
  }

  //Exclui a mensagem que foi clicada duas vezes
  const noDoubleClick = (idMensagem) => {
    if(window.confirm("Você quer excluir esta mensagem?")){
      const lsitadeMensagens = [...arrayDeMensagens]

      const indexParaDeletar = lsitadeMensagens.findIndex(
        (mensagem) => (mensagem.id === idMensagem)
      )
    if(indexParaDeletar > -1){
      lsitadeMensagens.splice(indexParaDeletar, 1)
      setArrayDeMensagens(lsitadeMensagens)
    }
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
        noDoubleClick={noDoubleClick}
      />
      <Footer
        onChangeMessage={onChangeMessage}
      />
    </Div>
  );
}

export default App;
