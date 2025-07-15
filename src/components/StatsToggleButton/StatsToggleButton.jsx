import { Button } from "react-aria-components";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import styles from "./StatsToggleButton.module.css"

export default function StatsToggleButton({setToggleStats, style = {}}) {
    function handleClick() {
        setToggleStats(prevValue => !prevValue)
    }

    return (
        <Button style={style} onClick={handleClick} className={styles.statsToggleButton}>
            <MixerHorizontalIcon color="currentColor" width={25} height={25} />
        </Button>
    )
}