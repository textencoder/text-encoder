import { Button } from "react-aria-components";
import { CircleIcon } from "@radix-ui/react-icons";
import "./LayerButton.css";

export default function LayerOneButton() {
  function handleClick(event) {
    console.log(event)
  }

  return (
    <Button onClick={(event) => handleClick(event)}>
      <CircleIcon color="white"/>
    </Button>
  );
}
