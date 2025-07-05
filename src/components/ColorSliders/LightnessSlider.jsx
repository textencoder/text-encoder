import "./ColorSlider.css";

import {
  ColorSlider,
  ColorThumb,
  Label,
  SliderOutput,
  SliderTrack,
} from "react-aria-components";

export default function LightnessSlider({primaryColor, setPrimaryColor}) {
  function handleChange(event) {
    const newValues = {
      ...primaryColor,
      lightness: event.lightness,
    };

    setPrimaryColor(newValues);
  }

  return (
    <ColorSlider channel="lightness"
    value={`hsl(${primaryColor.hue}, ${primaryColor.saturation}%, ${primaryColor.lightness}%)`}
    onChange={handleChange}
    >
      <SliderTrack>
        <ColorThumb />
      </SliderTrack>
    </ColorSlider>
  );
}