import { Button } from "react-aria-components";
import { useState } from "react";
import {
  ChevronRightIcon,
  CircleIcon,
  EyeNoneIcon,
  EyeOpenIcon,
  LockClosedIcon,
  LockOpen1Icon,
} from "@radix-ui/react-icons";
import styles from "./LayerButton.module.css";

export default function LayerOneButton({ setTargetLayer, style = {} }) {
  const [layerVisibility, setLayerVisibility] = useState(true);
  const [layerLock, setLayerLock] = useState(false)

  function handleClick() {
    setTargetLayer("layerOne");
  }

  return (
    <Button
      aria-label="Layer One Controls"
      className={styles.layerButton}
      style={style}
      onClick={(event) => handleClick(event)}
    >
      <div className={styles.layerInfo}>
        <div className={styles.layerControls}>
          <LayerVisibilityButton
            layerVisibility={layerVisibility}
            setLayerVisibility={setLayerVisibility}
          />
          <LayerLockButton layerLock={layerLock} setLayerLock={setLayerLock} />
        </div>
        <div style={{ display: "flex", gap: 5 }}>
          <CircleIcon color="currentColor" />
          <p>Layer One</p>
        </div>
      </div>
      <ChevronRightIcon />
    </Button>
  );
}

function LayerVisibilityButton({ layerVisibility, setLayerVisibility }) {
  return (
    <Button
      onClick={() => setLayerVisibility((prevValue) => !prevValue)}
      className={styles.layerControl}
    >
      {layerVisibility ? <EyeOpenIcon /> : <EyeNoneIcon />}
    </Button>
  );
}

function LayerLockButton({layerLock, setLayerLock}) {
  return (
    <Button onClick={() => setLayerLock(prevValue => !prevValue)} className={styles.layerControl}>
      {layerLock ? <LockClosedIcon /> : <LockOpen1Icon />}
    </Button>
  );
}
