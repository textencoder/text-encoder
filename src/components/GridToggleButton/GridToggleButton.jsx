import { Button } from "react-aria-components";
import { GridIcon } from "@radix-ui/react-icons";
import styles from "./gridToggleButton.module.css";

export default function GridToggleButton() {
  function handleClick() {
    console.log("toggle grid")
  }

  return (
    <Button className={styles.gridToggleButton} onClick={handleClick}>
      <GridIcon color="white" width={25} height={25}/>
    </Button>
  );
}