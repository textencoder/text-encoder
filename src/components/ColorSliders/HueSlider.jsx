import "./ColorSlider.css";

import {
  ColorSlider,
  ColorThumb,
  Label,
  SliderOutput,
  SliderTrack,
} from "react-aria-components";

export default function HueSlider({ primaryColor, setPrimaryColor }) {
  function handleChange(event) {
    const newValues = {
      ...primaryColor,
      hue: event.hue
    }

    setPrimaryColor(newValues)
  }

  return (
    <ColorSlider
      channel="hue"
      value={`hsl(${primaryColor.hue}, ${primaryColor.saturation}%, ${primaryColor.lightness}%)`}
      onChange={(event) => handleChange(event)}
    >
      <SliderTrack>
        <ColorThumb />
      </SliderTrack>
    </ColorSlider>
  );
}
