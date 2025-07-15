import styles from "./Statistics.module.css";
import { Crosshair2Icon } from "@radix-ui/react-icons";

export default function Measurements(props) {
  return (
    <div className={styles.attributes}>
      <Crosshair2Icon />
      <div className={styles.measurements}>
        <span>{Number(props.vectorAttributes.width).toFixed(2)}</span>
        <span>{Number(props.vectorAttributes.height).toFixed(2)}</span>
      </div>
    </div>
  );
}
