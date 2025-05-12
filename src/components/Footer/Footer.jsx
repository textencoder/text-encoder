import { Popover } from "radix-ui";
import { RgbaColorPicker } from "react-colorful";
import styles from "./Footer.module.css"

export default function Footer(props) {
  return (
    <footer>
      <div>
        {["primaryColor", "secondaryColor", "backgroundColor"].map(
          (el, index) => {
            return (
              <ColorPickerButton
                key={el}
                number={index + 1}
                layer={el}
                primaryColor={props.primaryColor}
                setPrimaryColor={props.setPrimaryColor}
                secondaryColor={props.secondaryColor}
                setSecondaryColor={props.setSecondaryColor}
                backgroundColor={props.backgroundColor}
                setBackgroundColor={props.setBackgroundColor}
              />
            );
          }
        )}
      </div>
    </footer>
  );
}

function ColorPickerButton(props) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="picker-button" aria-label="Change primary color">
          {props.number}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <section className="custom-layout example">
            <RgbaColorPicker
              color={
                props.layer === "primaryColor" ? props.primaryColor
                : props.layer === "secondaryColor" ? props.secondaryColor
                : props.backgroundColor
              }
              onChange={
                props.layer === "primaryColor" ? props.setPrimaryColor
                : props.layer === "secondaryColor" ? props.setSecondaryColor
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
