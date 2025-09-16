import { useState, useEffect } from "react";
import { stringify } from "svgson";
import "./App.css";
import Header from "./components/Header/Header";
import Viewport from "./components/Viewport/Viewport";
import ControlCenter from "./components/ControlCenter/ControlCenter";
import ZoomSlider from "./components/ZoomSlider/ZoomSlider";
import { ZoomInIcon, ZoomOutIcon } from "@radix-ui/react-icons";
import Statistics from "./components/Statistics/Statistics";

export default function App() {
  const [vectorArray, setVectorArray] = useState([])

  //const [vector, setVector] = useState(null);
  const [vectorAttributes, setVectorAttributes] = useState({
    width: null,
    height: null,
    layers: null,
  });
  const [targetLayer, setTargetLayer] = useState(null);
  const [toggleGrid, setToggleGrid] = useState(true);
  const [toggleControls, setToggleControls] = useState(true);

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
        console.log("vectorArray: ", data[count])
        setVectorArray(data)
        //const { vector } = data[count];
        setVectorAttributes({
          width: data[count].vector.attributes.width,
          height: data[count].vector.attributes.height,
          layers: data[count].vector.children.length,
        });
      });
  }, []);

  return (
    <>
      {vectorArray.length > 0 && <Header
        count={count}
        vectorArray={vectorArray}
        setCount={setCount}
        setPrimaryColor={setPrimaryColor}
        setSecondaryColor={setSecondaryColor}
        setBackgroundColor={setBackgroundColor}
        toggleGrid={toggleGrid}
        setToggleGrid={setToggleGrid}
        toggleControls={toggleControls}
        setToggleControls={setToggleControls}
      />}

      <div
        style={{
          position: "fixed",
          left: 0,
          height: "100dvh",
          width: 200,
          display: "flex",
          flexDirection: "column",
          padding: 10,
        }}
      >
        <Statistics
          vectorAttributes={vectorAttributes}
          zoom={zoom}
          count={count}
          toggleControls={toggleControls}
          lightness={backgroundColor.lightness}
        />
      </div>

      {vectorArray.length > 0 && <Viewport
        zoom={zoom}
        //vector={vector}
        vectorArray={vectorArray}
        count={count}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        backgroundColor={backgroundColor}
        toggleGrid={toggleGrid}
      />}

      <div
        style={{
          position: "fixed",
          height: "100dvh",
          paddingRight: 10,
          right: 0,
          display: "grid",
          placeItems: "center",
          visibility: toggleControls ? "visible" : "hidden"
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
            marginBottom: 20,
          }}
        >
          <ZoomInIcon color="white" />
          <ZoomSlider zoom={zoom} setZoom={setZoom} />
          <ZoomOutIcon color="white" />
        </div>
      </div>

      <ControlCenter
        toggleControls={toggleControls}
        primaryColor={primaryColor}
        setPrimaryColor={setPrimaryColor}
        secondaryColor={secondaryColor}
        setSecondaryColor={setSecondaryColor}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        targetLayer={targetLayer}
        setTargetLayer={setTargetLayer}
        numberOfLayers={vectorAttributes.layers}
      />
    </>
  );
}
