import { Button } from "react-aria-components";
import { Half2Icon } from "@radix-ui/react-icons";
import "./LayerButton.css";

export default function LayerTwoButton() {
  function handleClick(event) {
    console.log(event);
  }

  return (
    <Button onClick={(event) => handleClick(event)}>
      <Half2Icon color="white" />
    </Button>
  );
}
