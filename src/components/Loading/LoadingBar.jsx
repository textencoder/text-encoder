import { ProgressBar, Label } from "react-aria-components";
import styles from "./LoadingBar.module.css";

export default function LoadingBar() {
  return (
    <ProgressBar
      aria-label="Loading…"
      isIndeterminate
      className={styles.loadingBar}
    >
      <div className={styles.bar}>
        <div className={styles.fill} />
      </div>
    </ProgressBar>
  );
}
