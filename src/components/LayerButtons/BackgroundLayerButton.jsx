import { Button } from "react-aria-components";
import { EnterFullScreenIcon } from "@radix-ui/react-icons";
import "./LayerButton.css";

export default function BackgroundLayerButton() {
  return (
    <Button>
      <EnterFullScreenIcon color="white"/>
    </Button>
  );
}
