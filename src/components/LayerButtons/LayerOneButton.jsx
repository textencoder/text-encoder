import { Button } from "react-aria-components";
import { CircleIcon } from "@radix-ui/react-icons";
import "./LayerButton.css";

export default function LayerOneButton({setTargetLayer, style= {}}) {
  function handleClick() {
    setTargetLayer("layerOne")
  }

  return (
    <Button style={style} onClick={(event) => handleClick(event)}>
      <CircleIcon color="currentColor"/>
    </Button>
  );
}
