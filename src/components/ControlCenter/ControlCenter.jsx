import styles from "./ControlCenter.module.css";
import LayerButton from "../LayerButtons/LayerButton";
import HueSlider from "../ColorSliders/HueSlider";
import SaturationSlider from "../ColorSliders/SaturationSlider";
import LightnessSlider from "../ColorSliders/LightnessSlider";

import {
  ArrowLeftIcon,
  BlendingModeIcon,
  ColorWheelIcon,
  Cross2Icon,
  GearIcon,
  Half2Icon,
  SunIcon,
  CircleIcon,
  EnterFullScreenIcon,
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
  vectorArray,
}) {
  const layerButtons = [
    {
      layer: "Two",
      icon: <Half2Icon color="currentColor" />,
    },
    {
      layer: "One",
      icon: <CircleIcon color="currentColor" />,
    },
    {
      layer: "Background",
      icon: <EnterFullScreenIcon color="currentColor" />,
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

  //console.log("currentVector: ", vectorArray[count]);

  return (
    <div
      className={styles.controlCenter}
      style={{ visibility: toggleControls ? "visible" : "hidden" }}
    >
      <div className={styles.controlCenterHeader}>
        <Button
          onClick={() => setTargetLayer(null)}
          style={{
            background: "none",
            border: "none",
            display: "grid",
            placeItems: "center",
          }}
        >
          <ArrowLeftIcon
            color="white"
            style={{ visibility: targetLayer ? "visible" : "hidden" }}
          />
        </Button>

        <div style={{ display: "flex", gap: 5, color: "white" }}>
          {targetLayer ? (
            layerButtons[0].icon,
            targetLayer
          )
        : (
          <>
          <GearIcon />
          <p>Control Center</p>
          </>
        )}
        </div>

        <Cross2Icon />
      </div>

      {!targetLayer && (
        <div className={styles.layerList}>
          {layerButtons.map((layer) => {
            return (
              <LayerButton
                numberOfLayers={numberOfLayers}
                layer={layer.layer}
                icon={layer.icon}
                setTargetLayer={setTargetLayer}
                style={{borderBottom: layer.layer !== "Background" ? "1px solid white" : null}}
              />
            );
          })}
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
