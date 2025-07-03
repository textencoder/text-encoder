import styles from "./Header.module.css";
import VectorSelect from "../VectorSelect/VectorSelect";

export default function Header(props) {
  return (
    <header>
        <div className={styles.logo}>
          <p>E</p>
        </div>

    <VectorSelect />
    </header>
  );
}