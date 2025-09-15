import {
  Button,
  OverlayArrow,
  Tooltip,
  TooltipTrigger,
} from "react-aria-components";
import { GridIcon } from "@radix-ui/react-icons";

export default function GridToggleButton({
  toggleGrid,
  setToggleGrid,
  style = {},
}) {
  function handleClick() {
    setToggleGrid((prevValue) => !prevValue);
  }

  return (
    <TooltipTrigger>
      <Button
        aria-label="Toggle Grid Visibility"
        style={style}
        className="header-button"
        onClick={handleClick}
      >
        <GridIcon color="currentColor" width={25} height={25} />
      </Button>
      <Tooltip>
        <OverlayArrow>
          <svg width={8} height={8} viewBox="0 0 8 8">
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </OverlayArrow>
        Toggle Grid
      </Tooltip>
    </TooltipTrigger>
  );
}
