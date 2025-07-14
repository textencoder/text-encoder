import { Button } from "react-aria-components";
import { EnterFullScreenIcon } from "@radix-ui/react-icons";
import "./LayerButton.css";

export default function BackgroundLayerButton({setTargetLayer}) {
function handleClick() {
    setTargetLayer("backgroundLayer")
  }

  return (
    <Button onClick={(event) => handleClick(event)}>
      <EnterFullScreenIcon color="white"/>
    </Button>
  );
}
