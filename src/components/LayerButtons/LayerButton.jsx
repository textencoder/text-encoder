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

export default function LayerButton({
  setTargetLayer,
  icon,
  layer,
  numberOfLayers,
  style = {},
}) {
  const [layerVisibility, setLayerVisibility] = useState(true);
  const [layerLock, setLayerLock] = useState(false);

  function handleClick() {
    if (layer === "Two") {
      setTargetLayer("layerTwo");
    } else if (layer === "One") {
      setTargetLayer("layerOne");
    } else if (layer === "Background") {
      setTargetLayer("backgroundLayer");
    }
  }

  return (
    <Button
      aria-label="Layer One Controls"
      className={styles.layerButton}
      style={style}
      onClick={(event) => handleClick(event)}
      isDisabled={numberOfLayers < 2 && layer === "Two"}
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
          {icon}
          <p>{layer === "Background" ? layer : "Layer " + layer}</p>
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

function LayerLockButton({ layerLock, setLayerLock }) {
  return (
    <Button
      onClick={() => setLayerLock((prevValue) => !prevValue)}
      className={styles.layerControl}
    >
      {layerLock ? <LockClosedIcon /> : <LockOpen1Icon />}
    </Button>
  );
}
