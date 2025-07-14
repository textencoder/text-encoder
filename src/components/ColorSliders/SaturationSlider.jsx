import "./ColorSlider.css";

import {
  ColorSlider,
  ColorThumb,
  Label,
  SliderOutput,
  SliderTrack,
} from "react-aria-components";

export default function SaturationSlider({ primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor, backgroundColor, setBackgroundColor, targetLayer }) {
  function handleChange(event) {
    if (targetLayer === "layerOne") {
      const newValues = {
        ...primaryColor,
        saturation: event.saturation,
      };
      setPrimaryColor(newValues);
    } else if (targetLayer === "layerTwo") {
      const newValues = {
        ...secondaryColor,
        saturation: event.saturation,
      };
      setSecondaryColor(newValues);
    } else if (targetLayer === "backgroundLayer") {
      const newValues = {
        ...backgroundColor,
        saturation: event.saturation,
      };
      setBackgroundColor(newValues);
    }
  }

  return (
    <ColorSlider
      channel="saturation"
      value={targetLayer === "layerOne" ? `hsl(${primaryColor.hue}, ${primaryColor.saturation}%, ${primaryColor.lightness}%)`
    : targetLayer === "layerTwo" ? `hsl(${secondaryColor.hue}, ${secondaryColor.saturation}%, ${secondaryColor.lightness}%)`
    : targetLayer === "backgroundLayer" ? `hsl(${backgroundColor.hue}, ${backgroundColor.saturation}%, ${backgroundColor.lightness}%)`
    : null
    }
      onChange={handleChange}
    >
      <SliderTrack>
        <ColorThumb />
      </SliderTrack>
    </ColorSlider>
  );
}
