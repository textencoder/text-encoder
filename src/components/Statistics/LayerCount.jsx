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
        color: props.lightness < 70 ? "white" : "black"
      }}
    >
      <LayersIcon />
      <div className={styles.layerCount} style={props.lightness < 70 ? {backgroundColor: "white", color: "black"} : {backgroundColor: "black", color: "white"}}>{props.layers}</div>
    </div>
  );
}
