import { Button } from "react-aria-components";
import { Half2Icon } from "@radix-ui/react-icons";
import styles from "./LayerButton.module.css";

export default function LayerTwoButton({setTargetLayer, style= {}}) {
  function handleClick() {
    setTargetLayer("layerTwo")
  }

  return (
    <Button className={styles.layerButton} style={style} onClick={(event) => handleClick(event)}>
      <Half2Icon color="currentColor" />
    </Button>
  );
}
