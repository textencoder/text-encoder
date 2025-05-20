import { useState, useEffect } from "react";
import { parse, stringify } from "svgson";
import "../../styles/App.css"
import styles from "./Lab.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Viewport from "../../components/Viewport/Viewport";

export default function Lab() {
  const [name, setName] = useState("");
  const [vector, setVector] = useState(null);

  const [primaryColor, setPrimaryColor] = useState({ r: 255, g: 92, b: 0, a: 1 });
  const [secondaryColor, setSecondaryColor] = useState({ r: 255, g: 255, b: 255, a: 1 })
  const [backgroundColor, setBackgroundColor] = useState({ r: 147, g: 161, b: 176, a: 0.05 })

  const [zoom, setZoom] = useState(100)

  const randomNumber = () => {
    return Math.floor(Math.random() * 24)
  }

    const [count, setCount] = useState(() => randomNumber());
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
    <div className={styles.labBackground}>
      <div className={styles.labWrapper}>
      <Header 
      name={name}
      vector={vector}
      count={count}
      setCount={setCount}
      setVector={setVector}
      />

      <Viewport 
      zoom={zoom}
      vector={vector}
      primaryColor={primaryColor}
      backgroundColor={backgroundColor}
      />
      
      <Footer
      zoom={zoom}
      setZoom={setZoom}
      primaryColor={primaryColor}
      setPrimaryColor={setPrimaryColor}
      backgroundColor={backgroundColor}
      setBackgroundColor={setBackgroundColor}
      />
    </div>
    </div>
  );
}