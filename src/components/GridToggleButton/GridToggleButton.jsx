import { Button } from "react-aria-components";
import { GridIcon } from "@radix-ui/react-icons";
import styles from "./gridToggleButton.module.css";

export default function GridToggleButton({toggleGrid, setToggleGrid, style = {}}) {
  function handleClick() {
    setToggleGrid(prevValue => !prevValue)
  }

  return (
    <Button style={style} className={styles.gridToggleButton} onClick={handleClick}>
      <GridIcon color="currentColor" width={25} height={25}/>
    </Button>
  );
}