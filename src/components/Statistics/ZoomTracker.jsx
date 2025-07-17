import styles from "./Statistics.module.css";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function ZoomTracker(props) {
  return (
    <div className={styles.zoom} style={{color: props.lightness < 70 ? "white" : "black"}}>
      <MagnifyingGlassIcon width={16} height={16} />
      <p style={{borderColor: props.lightness < 70 ? "white" : "black"}}>{props.zoom}%</p>
    </div>
  );
}
