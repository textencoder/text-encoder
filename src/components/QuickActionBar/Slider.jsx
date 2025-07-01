import { Popover, Slider } from "radix-ui";
import styles from "../Footer/Footer.module.css";

export default function SliderButton(props) {
  function handleSlider(event) {
    console.log(event.target.value);
    props.setZoom(event.target.value);
  }

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button title={props.layer}>{props.icon}</button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <form>
            <Slider.Root
              className={styles.SliderRoot}
              onChange={handleSlider}
              defaultValue={[props.zoom]}
              min={10}
              max={100}
              step={10}
            >
              <Slider.Track className={styles.SliderTrack}>
                <Slider.Range className={styles.SliderRange} />
              </Slider.Track>
              <Slider.Thumb
                className={styles.SliderThumb}
                aria-label="Volume"
              />
            </Slider.Root>
          </form>
          <Popover.Arrow className={styles.PopoverArrow} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}