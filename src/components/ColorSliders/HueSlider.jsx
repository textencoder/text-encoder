import "./ColorSlider.css";

import {
  ColorSlider,
  ColorThumb,
  Label,
  SliderOutput,
  SliderTrack,
} from "react-aria-components";

export default function HueSlider({
  primaryColor,
  setPrimaryColor,
  secondaryColor,
  setSecondaryColor,
  backgroundColor,
  setBackgroundColor,
  targetLayer,
}) {
  function handleChange(event) {
    if (targetLayer === "layerOne") {
      const newValues = {
        ...primaryColor,
        hue: event.hue,
      };
      setPrimaryColor(newValues);
    } else if (targetLayer === "layerTwo") {
      const newValues = {
        ...secondaryColor,
        hue: event.hue,
      };
      setSecondaryColor(newValues);
    } else if (targetLayer === "backgroundLayer") {
      const newValues = {
        ...backgroundColor,
        hue: event.hue,
      };
      setBackgroundColor(newValues);
    }
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
