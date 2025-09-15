import { Button } from "react-aria-components";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";

export default function StatsToggleButton({setToggleControls, style = {}}) {
    function handleClick() {
        setToggleControls(prevValue => !prevValue)
    }

    return (
        <Button aria-label="View/Hide Controls" style={style} onClick={handleClick} className="header-button">
            <MixerHorizontalIcon color="currentColor" width={25} height={25} />
        </Button>
    )
}