import "./ColorSlider.css";

import {
  ColorSlider,
  ColorThumb,
  Label,
  SliderOutput,
  SliderTrack,
} from "react-aria-components";

export default function SaturationSlider() {
  return (
    <ColorSlider channel="saturation" defaultValue="hsl(0, 100%, 50%)">
      <Label />
      <SliderOutput />
      <SliderTrack>
        <ColorThumb />
      </SliderTrack>
    </ColorSlider>
  );
}