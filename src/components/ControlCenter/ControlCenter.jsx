import styles from "./ControlCenter.module.css";
import LayerOneButton from "../LayerButtons/LayerOneButton";
import LayerTwoButton from "../LayerButtons/LayerTwoButton";
import BackgroundLayerButton from "../LayerButtons/BackgroundLayerButton";
import HueSlider from "../ColorSliders/HueSlider";
import SaturationSlider from "../ColorSliders/SaturationSlider";
import LightnessSlider from "../ColorSliders/LightnessSlider";
import ZoomSlider from "../ZoomSlider/ZoomSlider";
import RandomButton from "../RandomButton/RandomButton";
import { BlendingModeIcon, ColorWheelIcon, SunIcon } from "@radix-ui/react-icons";

export default function ControlCenter() {
    return (
        <div className={styles.controlCenter}>
            <div className={styles.layerButtons}>
                <LayerOneButton />
                <LayerTwoButton />
                <BackgroundLayerButton />
            </div>

            <div className={styles.colorSliders}>
                <span><ColorWheelIcon color="white"/><HueSlider /></span>
                <span><BlendingModeIcon  color="white"/><SaturationSlider /></span>
                <span><SunIcon color="white"/><LightnessSlider /></span>
            </div>

            <div className={styles.zoomSlider}>
                <ZoomSlider />
            </div>

            <div className={styles.randomButton}>
                <RandomButton />
            </div>

        </div>
    )
}