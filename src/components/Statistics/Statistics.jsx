import styles from "./Statistics.module.css";
import {
  LayersIcon,
  FileIcon,
  Crosshair2Icon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";

export default function Statistics(props) {
  return (
    <div className={styles.statWrapper} style={{visibility: props.toggleStats ? "visible" : "hidden"}}>
      <div className={styles.attributes}>
        <Crosshair2Icon />
        <div className={styles.measurements}>
          <span>{Number(props.vectorAttributes.width).toFixed(2)}</span>
          <span>{Number(props.vectorAttributes.height).toFixed(2)}</span>
        </div>
      </div>

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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <LayersIcon color="white" />
        <div className={styles.layerCount}>{props.vectorAttributes.layers}</div>
      </div>

      <div className={styles.zoom}>
        <MagnifyingGlassIcon width={16} height={16} />
        <p>{props.zoom}%</p>
      </div>
    </div>
  );
}
