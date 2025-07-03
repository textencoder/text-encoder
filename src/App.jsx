import { useState, useEffect } from "react";
import { parse, stringify } from "svgson";
import "./App.css";
import Header from "./components/Header/Header";
import Viewport from "./components/Viewport/Viewport";
import ControlCenter from "./components/ControlCenter/ControlCenter";

export default function App() {
  const [name, setName] = useState("");
  const [vector, setVector] = useState(null);

  const [primaryColor, setPrimaryColor] = useState({
    r: 255,
    g: 92,
    b: 0,
    a: 1,
  });
  const [secondaryColor, setSecondaryColor] = useState({
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  });
  const [backgroundColor, setBackgroundColor] = useState({
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  });

  const [zoom, setZoom] = useState(55);

  const randomNumber = () => {
    return Math.floor(Math.random() * 24);
  };

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
    <>
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

        <ControlCenter />
      </>
  );
}
