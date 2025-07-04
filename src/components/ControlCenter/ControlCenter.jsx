import styles from "./ControlCenter.module.css";
import LayerOneButton from "../LayerButtons/LayerOneButton";
import LayerTwoButton from "../LayerButtons/LayerTwoButton";
import BackgroundLayerButton from "../LayerButtons/BackgroundLayerButton";
import HueSlider from "../ColorSliders/HueSlider";
import SaturationSlider from "../ColorSliders/SaturationSlider";
import LightnessSlider from "../ColorSliders/LightnessSlider";
import ZoomSlider from "../ZoomSlider/ZoomSlider";
import RandomButton from "../RandomButton/RandomButton";

export default function ControlCenter() {
    return (
        <div className={styles.controlCenter}>
            <div className={styles.layerButtons}>
                <LayerOneButton />
                <LayerTwoButton />
                <BackgroundLayerButton />
            </div>

            <div className={styles.colorSliders}>
                <span><p>H</p><HueSlider /></span>
                <span><p>S</p><SaturationSlider /></span>
                <span><p>L</p><LightnessSlider /></span>
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