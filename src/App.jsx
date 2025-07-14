import { useState, useEffect } from "react";
import { parse, stringify } from "svgson";
import "./App.css";
import Header from "./components/Header/Header";
import Viewport from "./components/Viewport/Viewport";
import ControlCenter from "./components/ControlCenter/ControlCenter";
import ZoomSlider from "./components/ZoomSlider/ZoomSlider";
import { ZoomInIcon, ZoomOutIcon } from "@radix-ui/react-icons";

export default function App() {
  const [vector, setVector] = useState(null);
  const [targetLayer, setTargetLayer] = useState("layerOne");
  const [toggleGrid, setToggleGrid] = useState(true);
  const [numberOfLayers, setNumberOfLayers] = useState(null)

  const [primaryColor, setPrimaryColor] = useState({
    hue: Math.floor(Math.random() * 361),
    saturation: Math.floor(Math.random() * 101),
    lightness: Math.floor(Math.random() * 101),
  });
  const [secondaryColor, setSecondaryColor] = useState({
    hue: Math.floor(Math.random() * 361),
    saturation: Math.floor(Math.random() * 101),
    lightness: Math.floor(Math.random() * 101),
  });
  const [backgroundColor, setBackgroundColor] = useState({
    hue: 180,
    saturation: 0,
    lightness: 0,
  });

  const [zoom, setZoom] = useState(50);

  const randomNumber = () => {
    return Math.floor(Math.random() * 22);
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
        setPrimaryColor={setPrimaryColor}
        setSecondaryColor={setSecondaryColor}
        setBackgroundColor={setBackgroundColor}
        toggleGrid={toggleGrid}
        setToggleGrid={setToggleGrid}
        numberOfLayers={numberOfLayers}
      />

      <Viewport
        zoom={zoom}
        vector={vector}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        backgroundColor={backgroundColor}
        toggleGrid={toggleGrid}
        setNumberOfLayers={setNumberOfLayers}
      />

      <div
        style={{
          position: "fixed",
          height: "100dvh",
          paddingRight: 10,
          right: 0,
          display: "grid",
          placeItems: "center",
        }}
      >
        <div
          style={{
            border: "1px solid white",
            width: 50,
            height: 225,
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <ZoomInIcon color="white" />
          <ZoomSlider zoom={zoom} setZoom={setZoom} />
          <ZoomOutIcon color="white" />
        </div>
      </div>

      <ControlCenter
        primaryColor={primaryColor}
        setPrimaryColor={setPrimaryColor}
        secondaryColor={secondaryColor}
        setSecondaryColor={setSecondaryColor}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        targetLayer={targetLayer}
        setTargetLayer={setTargetLayer}
        numberOfLayers={numberOfLayers}
      />
    </>
  );
}
