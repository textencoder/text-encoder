import QuickActionBar from "../QuickActionBar/QuickActionBar";
import styles from "./Footer.module.css";

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <QuickActionBar
        primaryColor={props.primaryColor}
        setPrimaryColor={props.setPrimaryColor}
        secondaryColor={props.secondaryColor}
        setSecondaryColor={props.setSecondaryColor}
        backgroundColor={props.backgroundColor}
        setBackgroundColor={props.setBackgroundColor}
        zoom={props.zoom}
        setZoom={props.setZoom}
      />
    </footer>
  );
}
