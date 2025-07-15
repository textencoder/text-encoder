import styles from "./Statistics.module.css";
import { LayersIcon } from "@radix-ui/react-icons";

export default function LayerCount(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      <LayersIcon color="white" />
      <div className={styles.layerCount}>{props.layers}</div>
    </div>
  );
}
