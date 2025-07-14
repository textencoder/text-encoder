import { Button } from "react-aria-components";
import { CircleIcon } from "@radix-ui/react-icons";
import styles from "./LayerButton.module.css";

export default function LayerOneButton({setTargetLayer, style= {}}) {
  function handleClick() {
    setTargetLayer("layerOne")
  }

  return (
    <Button className={styles.layerButton} style={style} onClick={(event) => handleClick(event)}>
      <CircleIcon color="currentColor"/>
    </Button>
  );
}
