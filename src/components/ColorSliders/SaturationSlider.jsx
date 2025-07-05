import "./ColorSlider.css";

import {
  ColorSlider,
  ColorThumb,
  Label,
  SliderOutput,
  SliderTrack,
} from "react-aria-components";

export default function SaturationSlider({ primaryColor, setPrimaryColor }) {
  function handleChange(event) {
    const newValues = {
      ...primaryColor,
      saturation: event.saturation,
    };

    setPrimaryColor(newValues);
  }

  return (
    <ColorSlider
      channel="saturation"
      value={`hsl(${primaryColor.hue}, ${primaryColor.saturation}%, ${primaryColor.lightness}%)`}
      onChange={handleChange}
    >
      <SliderTrack>
        <ColorThumb />
      </SliderTrack>
    </ColorSlider>
  );
}
