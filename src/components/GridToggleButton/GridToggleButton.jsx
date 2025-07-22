import { Button } from "react-aria-components";
import { GridIcon } from "@radix-ui/react-icons";

export default function GridToggleButton({toggleGrid, setToggleGrid, style = {}}) {
  function handleClick() {
    setToggleGrid(prevValue => !prevValue)
  }

  return (
    <Button aria-label="Toggle Grid Visibility" style={style} className="header-button" onClick={handleClick}>
      <GridIcon color="currentColor" width={25} height={25}/>
    </Button>
  );
}