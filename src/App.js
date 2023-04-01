import { useState } from "react";
import Card from "./card/Card";
import Header from "./header/Header";
import {AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillYoutube} from "react-icons/ai";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = (e) => {
    setDarkMode(e.target.checked)
  }
  return (
    <div className={darkMode ? 'dark' : undefined }>
      <div className="dark:bg-slate-900 pb-10">
      <Header
        toggleDarkMode = {toggleDarkMode}
      />
      <div className=" container  gap-3 xl:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card 
          icon = {<AiFillFacebook size={30}/>}
          cardClass = 'card  before:bg-facebook'
          iconClass = 'text-facebook'
        />
        <Card
          icon = {<AiFillTwitterSquare size={30}/>}
          cardClass = 'card  before:bg-twitter '
          iconClass = 'text-twitter'
        />
        <Card
          icon = {<AiFillInstagram size={30}/>} 
          cardClass = 'card before:bg-gradient-to-r before:from-amber-500 before:via-orange-600 before:to-purple-600'
          iconClass = 'text-instagram'
        />
        <Card 
          icon = {<AiFillYoutube size={30} />}
          cardClass = 'card  before:bg-youtube'
          iconClass = 'text-youtube'
        />
      </div>
    </div>
    </div>

  );
}

export default App;
