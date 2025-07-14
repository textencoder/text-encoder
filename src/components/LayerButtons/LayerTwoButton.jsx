import { Button } from "react-aria-components";
import { Half2Icon } from "@radix-ui/react-icons";
import "./LayerButton.css";

export default function LayerTwoButton({setTargetLayer, style= {}}) {
  function handleClick() {
    setTargetLayer("layerTwo")
  }

  return (
    <Button style={style} onClick={(event) => handleClick(event)}>
      <Half2Icon color="currentColor" />
    </Button>
  );
}
