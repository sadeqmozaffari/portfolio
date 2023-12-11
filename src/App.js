import { useState } from "react";
import "./App.css";
import {
  Header,
  HeroSection,
  Services,
  Portfolio,
  Skill,
  Contact,
  Footer,
} from "./components/index";

function App() {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => {
    setDark(!dark);
  };
  return (
    <div className={`${dark ? "dark-theme" : "light-theme"}`}>
      <Header dark={dark} toggleTheme={toggleTheme} />
      <main>
        <HeroSection dark={dark} />
        <Services dark={dark} />
        <Portfolio dark={dark} />
        <Skill dark={dark} />
        <Contact dark={dark} />
      </main>
      <Footer dark={dark} />
    </div>
  );
}

export default App;
