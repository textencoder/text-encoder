import { Popover, Slider } from "radix-ui";
import { RgbaColorPicker } from "react-colorful";
import styles from "./Footer.module.css";

export default function Footer(props) {
  const quickActions = [
    {
      action: "primaryColor",
      icon: (
        <svg
          width="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991ZM7.49991 1.82708C4.36689 1.82708 1.82708 4.36689 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82708 7.49991 1.82708Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      action: "secondaryColor",
      icon: (
        <svg
          width="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.49988 1.82689C4.36688 1.8269 1.82707 4.36672 1.82707 7.49972C1.82707 10.6327 4.36688 13.1725 7.49988 13.1726V1.82689Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      action: "backgroundColor",
      icon: (
        <svg
          width="18"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 2L4.87935 2C4.47687 1.99999 4.14469 1.99999 3.87409 2.0221C3.59304 2.04506 3.33469 2.09434 3.09202 2.21799C2.7157 2.40973 2.40973 2.7157 2.21799 3.09202C2.09434 3.33469 2.04506 3.59304 2.0221 3.87409C1.99999 4.14468 1.99999 4.47686 2 4.87933V4.87935V5.5C2 5.77614 2.22386 6 2.5 6C2.77614 6 3 5.77614 3 5.5V4.9C3 4.47171 3.00039 4.18056 3.01878 3.95552C3.03669 3.73631 3.06915 3.62421 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.62421 3.06915 3.73631 3.03669 3.95552 3.01878C4.18056 3.00039 4.47171 3 4.9 3H5.5C5.77614 3 6 2.77614 6 2.5C6 2.22386 5.77614 2 5.5 2ZM13 9.5C13 9.22386 12.7761 9 12.5 9C12.2239 9 12 9.22386 12 9.5V10.1C12 10.5283 11.9996 10.8194 11.9812 11.0445C11.9633 11.2637 11.9309 11.3758 11.891 11.454C11.7951 11.6422 11.6422 11.7951 11.454 11.891C11.3758 11.9309 11.2637 11.9633 11.0445 11.9812C10.8194 11.9996 10.5283 12 10.1 12H9.5C9.22386 12 9 12.2239 9 12.5C9 12.7761 9.22386 13 9.5 13H10.1206C10.5231 13 10.8553 13 11.1259 12.9779C11.407 12.9549 11.6653 12.9057 11.908 12.782C12.2843 12.5903 12.5903 12.2843 12.782 11.908C12.9057 11.6653 12.9549 11.407 12.9779 11.1259C13 10.8553 13 10.5232 13 10.1207V10.1207V10.1207V10.1206V9.5ZM2.5 9C2.77614 9 3 9.22386 3 9.5V10.1C3 10.5283 3.00039 10.8194 3.01878 11.0445C3.03669 11.2637 3.06915 11.3758 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.62421 11.9309 3.73631 11.9633 3.95552 11.9812C4.18056 11.9996 4.47171 12 4.9 12H5.5C5.77614 12 6 12.2239 6 12.5C6 12.7761 5.77614 13 5.5 13H4.87935C4.47687 13 4.14469 13 3.87409 12.9779C3.59304 12.9549 3.33469 12.9057 3.09202 12.782C2.7157 12.5903 2.40973 12.2843 2.21799 11.908C2.09434 11.6653 2.04506 11.407 2.0221 11.1259C1.99999 10.8553 1.99999 10.5231 2 10.1207V10.1206V10.1V9.5C2 9.22386 2.22386 9 2.5 9ZM10.1 3C10.5283 3 10.8194 3.00039 11.0445 3.01878C11.2637 3.03669 11.3758 3.06915 11.454 3.10899C11.6422 3.20487 11.7951 3.35785 11.891 3.54601C11.9309 3.62421 11.9633 3.73631 11.9812 3.95552C11.9996 4.18056 12 4.47171 12 4.9V5.5C12 5.77614 12.2239 6 12.5 6C12.7761 6 13 5.77614 13 5.5V4.87935V4.87934C13 4.47686 13 4.14468 12.9779 3.87409C12.9549 3.59304 12.9057 3.33469 12.782 3.09202C12.5903 2.7157 12.2843 2.40973 11.908 2.21799C11.6653 2.09434 11.407 2.04506 11.1259 2.0221C10.8553 1.99999 10.5231 1.99999 10.1206 2L10.1 2H9.5C9.22386 2 9 2.22386 9 2.5C9 2.77614 9.22386 3 9.5 3H10.1Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      action: "zoom",
      icon: (
        <svg
          width="18"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      action: "randomize",
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3536 1.14645C12.1583 0.951184 11.8417 0.951184 11.6464 1.14645C11.4512 1.34171 11.4512 1.65829 11.6464 1.85355L12.7929 3H12C10.7037 3 9.71111 3.58423 8.87248 4.38931C8.20065 5.03427 7.59349 5.85684 6.99461 6.6682C6.86287 6.84668 6.73154 7.02462 6.6 7.2C5.10874 9.18835 3.49037 11 0.5 11C0.223858 11 0 11.2239 0 11.5C0 11.7761 0.223858 12 0.5 12C4.00963 12 5.89126 9.81165 7.4 7.8C7.54367 7.60845 7.6832 7.41962 7.81996 7.23454L7.82005 7.23443L7.82006 7.23441C8.41674 6.42695 8.96069 5.69085 9.56502 5.11069C10.2889 4.41577 11.0463 4 12 4H12.7929L11.6464 5.14645C11.4512 5.34171 11.4512 5.65829 11.6464 5.85355C11.8417 6.04882 12.1583 6.04882 12.3536 5.85355L14.3536 3.85355C14.5488 3.65829 14.5488 3.34171 14.3536 3.14645L12.3536 1.14645ZM0.5 3C3.35278 3 5.12992 4.44588 6.50548 6.06746L6.3762 6.24266C6.2483 6.4161 6.12293 6.58609 6 6.75C5.96397 6.79804 5.92798 6.84581 5.892 6.89331C4.57348 5.29306 3.02637 4 0.5 4C0.223858 4 0 3.77614 0 3.5C0 3.22386 0.223858 3 0.5 3ZM8.87248 10.6107C8.37284 10.131 7.90897 9.55314 7.45767 8.95468C7.64688 8.71693 7.82704 8.48061 8 8.25L8.08987 8.12987C8.58412 8.79402 9.05288 9.39766 9.56502 9.88931C10.2889 10.5842 11.0463 11 12 11H12.7929L11.6464 9.85355C11.4512 9.65829 11.4512 9.34171 11.6464 9.14645C11.8417 8.95118 12.1583 8.95118 12.3536 9.14645L14.3536 11.1464C14.5488 11.3417 14.5488 11.6583 14.3536 11.8536L12.3536 13.8536C12.1583 14.0488 11.8417 14.0488 11.6464 13.8536C11.4512 13.6583 11.4512 13.3417 11.6464 13.1464L12.7929 12H12C10.7037 12 9.71111 11.4158 8.87248 10.6107Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <footer className={styles.footer}>
      <div>
        {[quickActions[0], quickActions[1], quickActions[2]].map((el) => {
          return (
            <ColorPickerButton
              key={el.action}
              icon={el.icon}
              layer={el.action}
              primaryColor={props.primaryColor}
              setPrimaryColor={props.setPrimaryColor}
              secondaryColor={props.secondaryColor}
              setSecondaryColor={props.setSecondaryColor}
              backgroundColor={props.backgroundColor}
              setBackgroundColor={props.setBackgroundColor}
            />
          );
        })}
        {[quickActions[3]].map((el) => {
          return (
            <SliderButton
              zoom={props.zoom}
              setZoom={props.setZoom}
              key={el.action}
              icon={el.icon}
              layer={el.action}
            />
          );
        })}
        {[quickActions[4]].map((el) => {
          return (
            <RandomizeButton setPrimaryColor={props.setPrimaryColor} setBackgroundColor={props.setBackgroundColor} key={el.action} icon={el.icon} layer={el.action} />
          );
        })}
      </div>
    </footer>
  );
}

function ColorPickerButton(props) {
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

function SliderButton(props) {
  function handleSlider(event) {
    console.log(event.target.value);
    props.setZoom(event.target.value);
  }

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button title={props.layer}>{props.icon}</button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <form>
            <Slider.Root
              className={styles.SliderRoot}
              onChange={handleSlider}
              defaultValue={[props.zoom]}
              min={10}
              max={100}
              step={10}
            >
              <Slider.Track className={styles.SliderTrack}>
                <Slider.Range className={styles.SliderRange} />
              </Slider.Track>
              <Slider.Thumb
                className={styles.SliderThumb}
                aria-label="Volume"
              />
            </Slider.Root>
          </form>
          <Popover.Arrow className={styles.PopoverArrow} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function RandomizeButton(props) {
  
  function handleRandomize() {
    props.setPrimaryColor({
      r: Math.floor(Math.random() * 255),
      g: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255),
      a: 1
    })
    props.setBackgroundColor({
      r: Math.floor(Math.random() * 255),
      g: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255),
      a: 1
    })
  }

  return (
    <button onClick={handleRandomize} title={props.layer}>
      {props.icon}
    </button>
  );
}
