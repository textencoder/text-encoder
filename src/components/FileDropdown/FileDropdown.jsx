import { Popover, ScrollArea } from "radix-ui";
import { useState, useEffect } from "react";
import { stringify } from "svgson";
import styles from "../Header/Header.module.css";
import Thumbnail from "./Thumbnail";
import { ReactSVG } from "react-svg";

export default function FileDropdown(props) {
  const [vectorArray, setVectorArray] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("/vectors.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setVectorArray(data);
      });
  }, []);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button className={`${styles.fileInfo} aktiv-regular`}>
         
          <div>
            <p>
              <span>File: </span>
              <span>{props.name}</span>
            </p>
            <p>
              <span>Number: </span>
              <span>
                {props.count + 1}/{vectorArray.length}
              </span>
            </p>
          </div>
          <div>
            <svg
              width="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                fill="white"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <ScrollArea.Root className="ScrollAreaRoot">
            <ScrollArea.Viewport className="ScrollAreaViewport">
              <div className="scroll-item-wrapper aktiv-regular">
                {vectorArray.map((vector) => {
                  return (
                    <Thumbnail
                      key={vector.name}
                      name={vector.name}
                      graphic={stringify(vector.vector)}
                      vectorArray={vectorArray}
                      count={props.count}
                      setCount={props.setCount}
                      setOpen={setOpen}
                    />
                  );
                })}
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              className="ScrollAreaScrollbar"
              orientation="vertical"
            >
              <ScrollArea.Thumb className="ScrollAreaThumb" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar
              className="ScrollAreaScrollbar"
              orientation="horizontal"
            >
              <ScrollArea.Thumb className="ScrollAreaThumb" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="ScrollAreaCorner" />
          </ScrollArea.Root>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
