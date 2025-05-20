import { Popover } from "radix-ui";
import { RgbaColorPicker } from "react-colorful";
import styles from "./Footer.module.css"

export default function Footer(props) {

  const quickActions = [
    {action: "primaryColor", icon: (<svg width="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991ZM7.49991 1.82708C4.36689 1.82708 1.82708 4.36689 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82708 7.49991 1.82708Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>)},
    {action: "secondaryColor", icon: (<svg width="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.49988 1.82689C4.36688 1.8269 1.82707 4.36672 1.82707 7.49972C1.82707 10.6327 4.36688 13.1725 7.49988 13.1726V1.82689Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>)},
    {action: "backgroundColor", icon: (<svg width="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.44995 0.949951C1.31734 0.949951 1.19016 1.00263 1.0964 1.0964C1.00263 1.19017 0.949951 1.31735 0.949951 1.44995L0.949966 3.44995C0.949969 3.7261 1.17383 3.94995 1.44997 3.94995C1.72611 3.94995 1.94997 3.72609 1.94997 3.44995L1.94995 1.94995H3.44997C3.72611 1.94995 3.94997 1.72609 3.94997 1.44995C3.94997 1.17381 3.72611 0.949951 3.44997 0.949951H1.44995ZM5.94995 0.949951C5.67381 0.949951 5.44995 1.17381 5.44995 1.44995C5.44995 1.72609 5.67381 1.94995 5.94995 1.94995H8.94995C9.22609 1.94995 9.44995 1.72609 9.44995 1.44995C9.44995 1.17381 9.22609 0.949951 8.94995 0.949951H5.94995ZM5.44995 13.45C5.44995 13.1738 5.67381 12.95 5.94995 12.95H8.94995C9.22609 12.95 9.44995 13.1738 9.44995 13.45C9.44995 13.7261 9.22609 13.95 8.94995 13.95H5.94995C5.67381 13.95 5.44995 13.7261 5.44995 13.45ZM1.94995 5.94995C1.94995 5.67381 1.72609 5.44995 1.44995 5.44995C1.17381 5.44995 0.949951 5.67381 0.949951 5.94995V8.94995C0.949951 9.22609 1.17381 9.44995 1.44995 9.44995C1.72609 9.44995 1.94995 9.22609 1.94995 8.94995V5.94995ZM13.45 5.44995C13.7261 5.44995 13.95 5.67381 13.95 5.94995V8.94995C13.95 9.22609 13.7261 9.44995 13.45 9.44995C13.1738 9.44995 12.95 9.22609 12.95 8.94995V5.94995C12.95 5.67381 13.1738 5.44995 13.45 5.44995ZM11.45 0.949951C11.1738 0.949951 10.95 1.17381 10.95 1.44995C10.95 1.72609 11.1738 1.94995 11.45 1.94995H12.9499V3.44995C12.9499 3.72609 13.1738 3.94995 13.4499 3.94995C13.7261 3.94995 13.9499 3.72609 13.9499 3.44995V1.44995C13.9499 1.17381 13.7252 0.949951 13.449 0.949951H11.45ZM1.44995 10.95C1.72609 10.95 1.94995 11.1738 1.94995 11.45V12.95H3.44997C3.72611 12.95 3.94997 13.1738 3.94997 13.45C3.94997 13.7261 3.72611 13.95 3.44997 13.95H1.44995C1.17381 13.95 0.949951 13.7261 0.949951 13.45V11.45C0.949951 11.1738 1.17381 10.95 1.44995 10.95ZM13.95 11.45C13.95 11.1738 13.7261 10.95 13.45 10.95C13.1738 10.9499 12.95 11.1738 12.95 11.4499L12.9491 12.95H11.45C11.1738 12.95 10.95 13.1738 10.95 13.45C10.95 13.7261 11.1738 13.95 11.45 13.95H13.4499C13.7261 13.95 13.9499 13.7261 13.9499 13.45L13.95 11.45Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>)},
    {action: "zoom", icon: (<svg width="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>)},
    {action: "export", icon: (<svg width="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>)}
  ]

  return (
    <footer className={styles.footer}>
      <div>
        {quickActions.map(
          (el) => {
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
          {props.icon}
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
