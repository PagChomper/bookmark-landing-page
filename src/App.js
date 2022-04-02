import Bookmark from "./components/Bookmark/Bookmark";
import BrowserList from "./components/BrowserList/BrowserList";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import QuestionsList from "./components/QuestionsList/QuestionsList";
import {React, useState} from "react"

function App() {

  const [isOpen, setIsOpen] = useState(false)

    function openMenu() {
        setIsOpen(prevState => !prevState)
        console.log(isOpen)
    }

  return (
    <div className="App">
      <Nav openMenu={openMenu} isOpen={isOpen}/>
      <Header isOpen={isOpen}/>
      <Features />
      <Bookmark />
      <BrowserList />
      <QuestionsList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
