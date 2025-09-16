import styles from "./ControlCenter.module.css";
import LayerOneButton from "../LayerButtons/LayerOneButton";
import LayerTwoButton from "../LayerButtons/LayerTwoButton";
import BackgroundLayerButton from "../LayerButtons/BackgroundLayerButton";
import HueSlider from "../ColorSliders/HueSlider";
import SaturationSlider from "../ColorSliders/SaturationSlider";
import LightnessSlider from "../ColorSliders/LightnessSlider";

import {
  ArrowLeftIcon,
  BlendingModeIcon,
  ColorWheelIcon,
  Cross2Icon,
  GearIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { Button } from "react-aria-components";

export default function ControlCenter({
  primaryColor,
  setPrimaryColor,
  secondaryColor,
  setSecondaryColor,
  backgroundColor,
  setBackgroundColor,
  targetLayer,
  setTargetLayer,
  numberOfLayers,
  toggleControls,
}) {
  const layerButtons = [
    {
      layer: "one",
      button: <LayerOneButton setTargetLayer={setTargetLayer} />,
    },
    {
      layer: "two",
      button: <LayerTwoButton setTargetLayer={setTargetLayer} />,
    },
    {
      layer: "background",
      button: <BackgroundLayerButton setTargetLayer={setTargetLayer} />,
    },
  ];

  const sliderIconProps = {
    color: "white",
    height: 18,
    width: 18,
  };

  const sliderProps = {
    primaryColor: primaryColor,
    setPrimaryColor: setPrimaryColor,
    secondaryColor: secondaryColor,
    setSecondaryColor: setSecondaryColor,
    backgroundColor: backgroundColor,
    setBackgroundColor: setBackgroundColor,
    targetLayer: targetLayer,
  };

  const colorSliderElements = [
    {
      type: "hue",
      icon: <ColorWheelIcon {...sliderIconProps} />,
      slider: <HueSlider {...sliderProps} />,
    },
    {
      type: "saturation",
      icon: <BlendingModeIcon {...sliderIconProps} />,
      slider: <SaturationSlider {...sliderProps} />,
    },
    {
      type: "lightness",
      icon: <SunIcon {...sliderIconProps} />,
      slider: <LightnessSlider {...sliderProps} />,
    },
  ];

  return (
    <div
      className={styles.controlCenter}
      style={{ visibility: toggleControls ? "visible" : "hidden" }}
    >
      <div className={styles.controlCenterHeader}>
        <Button onClick={() => setTargetLayer(null)} style={{background: "none", border: "none", display: "grid", placeItems: "center"}}>
        <ArrowLeftIcon color="white" style={{visibility: targetLayer ? "visible" : "hidden"}} />
        </Button>

        <div style={{ display: "flex", gap: 5 }}>
          <GearIcon />
          <p>Control Center</p>
        </div>

        <Cross2Icon />
      </div>

      {!targetLayer && (
        <div className={styles.layerList}>
          <LayerOneButton
            setTargetLayer={setTargetLayer}
            style={
              targetLayer === "layerOne"
                ? { color: "black", backgroundColor: "white" }
                : null
            }
          />
          <LayerTwoButton
            disabled={numberOfLayers === 1}
            setTargetLayer={setTargetLayer}
            style={
              targetLayer === "layerTwo"
                ? { color: "black", backgroundColor: "white" }
                : null
            }
          />
          <BackgroundLayerButton
            setTargetLayer={setTargetLayer}
            style={
              targetLayer === "backgroundLayer"
                ? { color: "black", backgroundColor: "white" }
                : null
            }
          />
        </div>
      )}

      {targetLayer && (
        <div className={styles.colorSliders}>
          {colorSliderElements.map((element) => {
            return (
              <span key={element.type}>
                {element.icon}
                {element.slider}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
