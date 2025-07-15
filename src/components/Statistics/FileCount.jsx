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
      }}
    >
      <FileIcon color="white" />
      <div className={styles.fileCount}>
        <span>{props.count + 1}</span>
        <span>22</span>
      </div>
    </div>
  );
}
