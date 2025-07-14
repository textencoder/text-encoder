import { Button } from "react-aria-components";
import { CircleIcon } from "@radix-ui/react-icons";
import "./LayerButton.css";

export default function LayerOneButton({setTargetLayer}) {
  function handleClick() {
    setTargetLayer("layerOne")
  }

  return (
    <Button onClick={(event) => handleClick(event)}>
      <CircleIcon color="white"/>
    </Button>
  );
}
