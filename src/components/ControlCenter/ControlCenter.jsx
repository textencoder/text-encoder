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
  setTargetLayer,
  zoom,
  setZoom
}) {
  return (
    <div className={styles.controlCenter}>
      <div className={styles.layerButtons}>
        <LayerOneButton setTargetLayer={setTargetLayer}/>
        <LayerTwoButton setTargetLayer={setTargetLayer}/>
        <BackgroundLayerButton setTargetLayer={setTargetLayer}/>
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
        <ZoomSlider zoom={zoom} setZoom={setZoom}/>
      </div>

      <div className={styles.randomButton}>
        <RandomButton setPrimaryColor={setPrimaryColor}/>
      </div>
    </div>
  );
}
