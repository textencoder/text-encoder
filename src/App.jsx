import { useState, useEffect } from "react";
import { parse, stringify } from "svgson";
import "./App.css";
import Header from "./components/Header/Header";
import Viewport from "./components/Viewport/Viewport";
import ControlCenter from "./components/ControlCenter/ControlCenter";

export default function App() {
  const [vector, setVector] = useState(null);
  const [targetLayer, setTargetLayer] = useState("layerOne");

  const [primaryColor, setPrimaryColor] = useState({
    hue: 50,
    saturation: 100,
    lightness: 50,
  });
  const [secondaryColor, setSecondaryColor] = useState({
    hue: 255,
    saturation: 255,
    lightness: 255,
  });
  const [backgroundColor, setBackgroundColor] = useState({
    hue: 0,
    saturation: 0,
    lightness: 0,
  });

  const [zoom, setZoom] = useState(100);

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
        const { vector } = data[count];
        setVector(stringify(vector));
      });
  }, [count]);

  return (
    <>
      <Header
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

      <ControlCenter
        primaryColor={primaryColor}
        setPrimaryColor={setPrimaryColor}
        secondaryColor={secondaryColor}
        setSecondaryColor={setSecondaryColor}
        targetLayer={targetLayer}
        setTargetLayer={setTargetLayer}
        zoom={zoom}
        setZoom={setZoom}
      />
    </>
  );
}
