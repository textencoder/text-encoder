import styles from "./Statistics.module.css";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function ZoomTracker(props) {
  return (
    <div className={styles.zoom}>
      <MagnifyingGlassIcon width={16} height={16} />
      <p>{props.zoom}%</p>
    </div>
  );
}
