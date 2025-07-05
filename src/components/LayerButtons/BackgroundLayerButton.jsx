import { Button } from "react-aria-components";
import { EnterFullScreenIcon } from "@radix-ui/react-icons";
import "./LayerButton.css";

export default function BackgroundLayerButton() {
function handleClick(event) {
    console.log(event)
  }

  return (
    <Button onClick={(event) => handleClick(event)}>
      <EnterFullScreenIcon color="white"/>
    </Button>
  );
}
