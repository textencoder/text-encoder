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
  setSecondaryColor,
}) {
  return (
    <div className={styles.controlCenter}>
      <div className={styles.layerButtons}>
        <LayerOneButton />
        <LayerTwoButton />
        <BackgroundLayerButton />
      </div>

      <div className={styles.colorSliders}>
        <span>
          <ColorWheelIcon color="white" />
          <HueSlider
            primaryColor={primaryColor}
            setPrimaryColor={setPrimaryColor}
          />
        </span>
        <span>
          <BlendingModeIcon color="white" />
          <SaturationSlider 
          primaryColor={primaryColor}
            setPrimaryColor={setPrimaryColor}
          />
        </span>
        <span>
          <SunIcon color="white" />
          <LightnessSlider 
          primaryColor={primaryColor}
            setPrimaryColor={setPrimaryColor}
          />
        </span>
      </div>

      <div className={styles.zoomSlider}>
        <ZoomSlider />
      </div>

      <div className={styles.randomButton}>
        <RandomButton />
      </div>
    </div>
  );
}
