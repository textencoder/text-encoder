import styles from "./Statistics.module.css";
import { LayersIcon } from "@radix-ui/react-icons";

export default function LayerCount(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        color: props.lightness < 70 ? "white" : "black",
        ...props.style
      }}
    >
      <LayersIcon />
      <div className={styles.layerCount} style={props.lightness < 70 ? {backgroundColor: "white", color: "black"} : {backgroundColor: "black", color: "white"}}>{props.layers}</div>
    </div>
  );
}
