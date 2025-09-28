import {
  Button,
  OverlayArrow,
  Tooltip,
  TooltipTrigger,
} from "react-aria-components";
import { ShuffleIcon } from "@radix-ui/react-icons";

export default function RandomButton({
  setPrimaryColor,
  setSecondaryColor,
  setBackgroundColor,
}) {
  function handleClick() {
    setPrimaryColor({
      hue: Math.floor(Math.random() * 361),
      saturation: Math.floor(Math.random() * 101),
      lightness: Math.floor(Math.random() * 101),
    });
    setSecondaryColor({
      hue: Math.floor(Math.random() * 361),
      saturation: Math.floor(Math.random() * 101),
      lightness: Math.floor(Math.random() * 101),
    });
    setBackgroundColor({
      hue: Math.floor(Math.random() * 361),
      saturation: Math.floor(Math.random() * 101),
      lightness: Math.floor(Math.random() * 101),
    });
  }

  return (
    <TooltipTrigger delay={0}>
      <Button
        aria-label="Generate Random Colors"
        className="header-button"
        onClick={handleClick}
      >
        <ShuffleIcon color="white" width={25} height={25} />
      </Button>
      <Tooltip>
        <OverlayArrow>
          <svg width={8} height={8} viewBox="0 0 8 8">
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </OverlayArrow>
        Randomize Colors
      </Tooltip>
    </TooltipTrigger>
  );
}
