import styles from "./ControlCenter.module.css";
import LayerOneButton from "../LayerButtons/LayerOneButton";
import LayerTwoButton from "../LayerButtons/LayerTwoButton";
import BackgroundLayerButton from "../LayerButtons/BackgroundLayerButton";
import HueSlider from "../ColorSliders/HueSlider";
import SaturationSlider from "../ColorSliders/SaturationSlider";
import LightnessSlider from "../ColorSliders/LightnessSlider";
import ZoomSlider from "../ZoomSlider/ZoomSlider";
import RandomButton from "../RandomButton/RandomButton";
import {
  BlendingModeIcon,
  ColorWheelIcon,
  SunIcon,
} from "@radix-ui/react-icons";

export default function ControlCenter({
  primaryColor,
  setPrimaryColor,
  secondaryColor,
  setSecondaryColor,
  backgroundColor,
  setBackgroundColor,
  targetLayer,
  setTargetLayer,
  zoom,
  setZoom,
}) {
  const layerButtons = [
    {
      layer: "one",
      button: <LayerOneButton setTargetLayer={setTargetLayer} />
    },
    {
      layer: "two",
      button: <LayerTwoButton setTargetLayer={setTargetLayer} />
    },
    {
      layer: "background",
      button: <BackgroundLayerButton setTargetLayer={setTargetLayer} />
    }
  ]

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
      icon: <ColorWheelIcon color="white" />,
      slider: <HueSlider {...sliderProps} />,
    },
    {
      type: "saturation",
      icon: <BlendingModeIcon color="white" />,
      slider: <SaturationSlider {...sliderProps} />,
    },
    {
      type: "lightness",
      icon: <SunIcon color="white" />,
      slider: <LightnessSlider {...sliderProps} />,
    },
  ];

  return (
    <div className={styles.controlCenter}>
      <div className={styles.layerButtons}>
        <LayerOneButton setTargetLayer={setTargetLayer} style={targetLayer === "layerOne" ? {color: "black", backgroundColor: "white"} : null}/>
        <LayerTwoButton setTargetLayer={setTargetLayer} style={targetLayer === "layerTwo" ? {color: "black", backgroundColor: "white"} : null}/>
        <BackgroundLayerButton setTargetLayer={setTargetLayer} style={targetLayer === "backgroundLayer" ? {color: "black", backgroundColor: "white"} : null}/>
      </div>

      <div className={styles.colorSliders}>
        {colorSliderElements.map(element => {
          return (
            <span key={element.type}>
              {element.icon}
              {element.slider}
            </span>
          )
        })}
      </div>
    </div>
  );
}
