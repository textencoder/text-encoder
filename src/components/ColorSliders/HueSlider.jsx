import "./ColorSlider.css";

import {
  ColorSlider,
  ColorThumb,
  Label,
  SliderOutput,
  SliderTrack,
} from "react-aria-components";

export default function HueSlider() {
  return (
    <ColorSlider channel="hue" defaultValue="hsl(0, 100%, 50%)">
      <SliderTrack>
        <ColorThumb />
      </SliderTrack>
    </ColorSlider>
  );
}
