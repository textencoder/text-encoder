import "./ZoomSlider.css"

import {
  Label,
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "react-aria-components";

export default function ZoomSlider({zoom, setZoom}) {
  function handleZoom(event) {
    setZoom(event)
  }

  return (
    <Slider defaultValue={zoom} orientation="vertical" aria-label="Zoom" onChange={handleZoom}>
      <SliderTrack>
        <SliderThumb />
        <SliderThumb>
          <Label />
        </SliderThumb>
      </SliderTrack>
    </Slider>
  );
}
