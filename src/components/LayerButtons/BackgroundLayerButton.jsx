import { Button } from "react-aria-components";
import { EnterFullScreenIcon } from "@radix-ui/react-icons";
import styles from "./LayerButton.module.css";

export default function BackgroundLayerButton({setTargetLayer, style= {}}) {
function handleClick() {
    setTargetLayer("backgroundLayer")
  }

  return (
    <Button className={styles.layerButton} style={style} onClick={(event) => handleClick(event)}>
      <EnterFullScreenIcon color="currentColor"/>
    </Button>
  );
}
