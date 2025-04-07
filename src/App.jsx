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

  useEffect(() => {
    fetch("../public/db.json")
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
      />
      
      <Footer />
    </>
  );
}

export default App;
