import { Popover } from "radix-ui";
import { RgbaColorPicker } from "react-colorful";

export default function ColorPickerButton(props) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          title={props.layer}
          className="picker-button"
          aria-label="Change primary color"
        >
          {props.icon}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <section className="custom-layout example">
            <RgbaColorPicker
              color={
                props.layer === "primaryColor"
                  ? props.primaryColor
                  : props.layer === "secondaryColor"
                  ? props.secondaryColor
                  : props.backgroundColor
              }
              onChange={
                props.layer === "primaryColor"
                  ? props.setPrimaryColor
                  : props.layer === "secondaryColor"
                  ? props.setSecondaryColor
                  : props.setBackgroundColor
              }
            />
          </section>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}