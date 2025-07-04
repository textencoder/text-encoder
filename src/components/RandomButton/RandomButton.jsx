import { Button } from "react-aria-components";
import { ShuffleIcon } from "@radix-ui/react-icons";
import "./RandomButton.css"

export default function RandomButton() {
  return (
    <Button>
      <ShuffleIcon color="white"/>
    </Button>
  );
}
