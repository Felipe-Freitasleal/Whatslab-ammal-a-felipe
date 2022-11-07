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
  const onChangeSender = (e) =>{
    setCurrSender(e.target.value)
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
      />
      <Footer/>
    </Div>
  );
}

export default App;
