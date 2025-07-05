import { Button } from "react-aria-components";
import { ShuffleIcon } from "@radix-ui/react-icons";
import "./RandomButton.css";

export default function RandomButton() {
  function handleClick(event) {
    console.log(event);
  }

  return (
    <Button onClick={(event) => handleClick(event)}>
      <ShuffleIcon color="white" />
    </Button>
  );
}
