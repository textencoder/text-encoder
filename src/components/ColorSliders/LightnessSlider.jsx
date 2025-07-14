import "./ColorSlider.css";

import {
  ColorSlider,
  ColorThumb,
  Label,
  SliderOutput,
  SliderTrack,
} from "react-aria-components";

export default function LightnessSlider({primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor, backgroundColor, setBackgroundColor, targetLayer}) {
  function handleChange(event) {
    if (targetLayer === "layerOne") {
      const newValues = {
        ...primaryColor,
        lightness: event.lightness,
      };
      setPrimaryColor(newValues);
    } else if (targetLayer === "layerTwo") {
      const newValues = {
        ...secondaryColor,
        lightness: event.lightness,
      };
      setSecondaryColor(newValues);
    } else if (targetLayer === "backgroundLayer") {
      const newValues = {
        ...backgroundColor,
        lightness: event.lightness,
      };
      setBackgroundColor(newValues);
    }
  }

  return (
    <ColorSlider channel="lightness"
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