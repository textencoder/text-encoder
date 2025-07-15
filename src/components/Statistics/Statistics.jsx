import styles from "./Statistics.module.css";
import Measurements from "./Measurements";
import FileCount from "./FileCount";
import LayerCount from "./LayerCount";
import ZoomTracker from "./ZoomTracker";

export default function Statistics(props) {
  return (
    <div className={styles.statWrapper} style={{visibility: props.toggleStats ? "visible" : "hidden"}}>
      <Measurements vectorAttributes={props.vectorAttributes}/>

      <FileCount count={props.count} />

      <LayerCount layers={props.vectorAttributes.layers} />

      <ZoomTracker zoom={props.zoom} />
    </div>
  );
}
