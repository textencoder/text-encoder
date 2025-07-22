import { Button } from "react-aria-components";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";

export default function StatsToggleButton({setToggleStats, style = {}}) {
    function handleClick() {
        setToggleStats(prevValue => !prevValue)
    }

    return (
        <Button aria-label="Toggle Controls Visibility" style={style} onClick={handleClick} className="header-button">
            <MixerHorizontalIcon color="currentColor" width={25} height={25} />
        </Button>
    )
}