import styles from "./Statistics.module.css";
import { Crosshair2Icon } from "@radix-ui/react-icons";

export default function Measurements(props) {
  return (
    <div className={styles.attributes} style={{color: props.lightness < 70 ? "white" : "black", ...props.style}}>
      <Crosshair2Icon />
      <div className={styles.measurements} style={{borderColor: props.lightness < 70 ? "white" : "black"}}>
        <span style={props.lightness < 70 ? {backgroundColor: "white", color: "black"} : {backgroundColor: "black", color: "white"}}>{Number(props.vectorAttributes.width).toFixed(2)}</span>
        <span>{Number(props.vectorAttributes.height).toFixed(2)}</span>
      </div>
    </div>
  );
}
