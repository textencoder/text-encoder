import "./ColorSlider.css";

import {
  ColorSlider,
  ColorThumb,
  Label,
  SliderOutput,
  SliderTrack,
} from "react-aria-components";

export default function LightnessSlider() {
  return (
    <ColorSlider channel="lightness" defaultValue="hsl(0, 100%, 50%)">
      <SliderTrack>
        <ColorThumb />
      </SliderTrack>
    </ColorSlider>
  );
}