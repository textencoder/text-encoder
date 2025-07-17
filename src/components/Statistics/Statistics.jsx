import styles from "./Statistics.module.css";
import Measurements from "./Measurements";
import FileCount from "./FileCount";
import LayerCount from "./LayerCount";
import ZoomTracker from "./ZoomTracker";

export default function Statistics(props) {

  return (
    <div className={styles.statWrapper} style={{visibility: props.toggleStats ? "visible" : "hidden"}}>
      <Measurements vectorAttributes={props.vectorAttributes} lightness={props.lightness}/>

      <FileCount count={props.count} lightness={props.lightness}/>

      <LayerCount layers={props.vectorAttributes.layers} lightness={props.lightness}/>

      <ZoomTracker zoom={props.zoom} lightness={props.lightness}/>
    </div>
  );
}
