import { useState, useEffect } from "react";
import { parse, stringify } from "svgson";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Viewport from "./components/Viewport";

function App() {
  const [name, setName] = useState("");
  const [vector, setVector] = useState(null);
  const [count, setCount] = useState(0);
  const [primaryColor, setPrimaryColor] = useState({ r: 255, g: 92, b: 0, a: 1 });
  const [secondaryColor, setSecondaryColor] = useState({ r: 255, g: 255, b: 255, a: 1 })
  const [backgroundColor, setBackgroundColor] = useState({ r: 147, g: 161, b: 176, a: 0.05 })

  useEffect(() => {
    fetch("/vectors.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { name, vector } = data[count];
        setName(name);
        setVector(stringify(vector));
      });
  }, [count]);

  return (
    <>
      <Header 
      name={name}
      count={count}
      setCount={setCount}
      />

      <Viewport 
      vector={vector}
      primaryColor={primaryColor}
      backgroundColor={backgroundColor}
      />
      
      <Footer
      primaryColor={primaryColor}
      setPrimaryColor={setPrimaryColor}
      backgroundColor={backgroundColor}
      setBackgroundColor={setBackgroundColor}
      />
    </>
  );
}

export default App;
