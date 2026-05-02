import styles from "./Statistics.module.css";
import { FileIcon } from "@radix-ui/react-icons";

export default function FileCount(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        color: props.lightness < 70 ? "white" : "black",
      }}
    >
      <div
        className={styles.fileCount}
        style={{ borderColor: props.lightness < 70 ? "white" : "black" }}
      >
        <span
          style={
            props.lightness < 70
              ? { backgroundColor: "white", color: "black" }
              : { backgroundColor: "black", color: "white" }
          }
        >
          {props.count + 1}
        </span>
        <span>22</span>
      </div>

      <FileIcon />
    </div>
  );
}
