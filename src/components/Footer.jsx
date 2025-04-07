import { Popover } from "radix-ui";
import { RgbaColorPicker } from "react-colorful";
import { useState } from "react";

export default function Footer(props) {
  const [activeColor, setActiveColor] = useState(null);

  return (
    <footer>
      <div>
        <Popover.Root>
          <Popover.Trigger asChild>
            <button 
            onClick={() => setActiveColor(1)}
            className={`color-button ${activeColor === 1 ? 'color-button--active' : 'color-button--inactive'}`}
            aria-label="Change primary color">
              1
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="PopoverContent" sideOffset={5}>
              <section className="custom-layout example">
                <RgbaColorPicker color={props.primaryColor} onChange={props.setPrimaryColor} />
              </section>
              <Popover.Arrow className="PopoverArrow" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>

        <button>2</button>
        
        <Popover.Root>
          <Popover.Trigger asChild>
            <button 
            onClick={() => setActiveColor(3)}
            className={`color-button ${activeColor === 3 ? 'color-button--active' : 'color-button--inactive'}`}
            aria-label="Change background color">
              BG
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="PopoverContent" sideOffset={5}>
              <section className="custom-layout example">
                <RgbaColorPicker color={props.backgroundColor} onChange={props.setBackgroundColor} />
              </section>
              <Popover.Arrow className="PopoverArrow" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </footer>
  );
}
