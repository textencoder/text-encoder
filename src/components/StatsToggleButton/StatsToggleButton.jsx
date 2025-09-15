import {
  Button,
  OverlayArrow,
  Tooltip,
  TooltipTrigger,
} from "react-aria-components";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";

export default function StatsToggleButton({ toggleControls, setToggleControls, style = {} }) {
  function handleClick() {
    setToggleControls((prevValue) => !prevValue);
  }

  return (
    <TooltipTrigger>
      <Button
        aria-label="View/Hide Controls"
        style={style}
        onClick={handleClick}
        className="header-button"
      >
        <MixerHorizontalIcon color="currentColor" width={25} height={25} />
      </Button>
      <Tooltip>
        <OverlayArrow>
          <svg width={8} height={8} viewBox="0 0 8 8">
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </OverlayArrow>
        {toggleControls ? "Hide " : "Show "}
        Controls
      </Tooltip>
    </TooltipTrigger>
  );
}
