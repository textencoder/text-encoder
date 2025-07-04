import "./ZoomSlider.css"

import {
  Label,
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "react-aria-components";

export default function ZoomSlider() {
  return (
    <Slider orientation="vertical" aria-label="Zoom">
      <Label />
      <SliderOutput />
      <SliderTrack>
        <SliderThumb />
        <SliderThumb>
          <Label />
        </SliderThumb>
      </SliderTrack>
    </Slider>
  );
}
