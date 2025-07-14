import { Button } from "react-aria-components";
import { EnterFullScreenIcon } from "@radix-ui/react-icons";
import "./LayerButton.css";

export default function BackgroundLayerButton({setTargetLayer, style= {}}) {
function handleClick() {
    setTargetLayer("backgroundLayer")
  }

  return (
    <Button style={style} onClick={(event) => handleClick(event)}>
      <EnterFullScreenIcon color="currentColor"/>
    </Button>
  );
}
