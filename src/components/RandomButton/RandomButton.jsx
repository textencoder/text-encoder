import { Button } from "react-aria-components";
import { ShuffleIcon } from "@radix-ui/react-icons";
//import "./RandomButton.css";

export default function RandomButton({setPrimaryColor, setSecondaryColor, setBackgroundColor}) {
  function handleClick() {
    setPrimaryColor({
      hue: Math.floor(Math.random() * 361),
      saturation: Math.floor(Math.random() * 101),
      lightness: Math.floor(Math.random() * 101)
    })
    setSecondaryColor({
      hue: Math.floor(Math.random() * 361),
      saturation: Math.floor(Math.random() * 101),
      lightness: Math.floor(Math.random() * 101)
    })
    setBackgroundColor({
      hue: Math.floor(Math.random() * 361),
      saturation: Math.floor(Math.random() * 101),
      lightness: Math.floor(Math.random() * 101)
    })
  }

  return (
    <Button onClick={handleClick}>
      <ShuffleIcon color="white" />
    </Button>
  );
}
