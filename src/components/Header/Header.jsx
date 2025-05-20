import { Popover, ScrollArea } from "radix-ui";
import { useState, useEffect } from "react";
import { stringify } from "svgson";
import { ReactSVG } from "react-svg";
import styles from "./Header.module.css";

export default function Header(props) {
  return (
    <header>
      <FileInfo
        name={props.name}
        count={props.count}
        setCount={props.setCount}
      />
      {/* <div>
        <Button
          count={props.count}
          setCount={props.setCount}
          direction="left"
        />
        <Button
          count={props.count}
          setCount={props.setCount}
          direction="right"
        />
      </div> */}
      <button title="Share" className={styles.share}>
        <svg
          width="15"
          
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </header>
  );
}

function Button(props) {
  return (
    <button
      className={styles.prevNext}
      title={props.direction === "left" ? "Previous" : "Next"}
      onClick={
        props.direction == "left"
          ? () => props.setCount(props.count - 1)
          : () => props.setCount(props.count + 1)
      }
      disabled={
        props.direction == "left" ? props.count == 0 : props.count == 23
      }
    >
      {props.direction == "left" ? (
        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      ) : (
        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    </button>
  );
}

function FileInfo(props) {
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
            <p>{props.name}</p>
            <p>
              {props.count + 1}/{vectorArray.length}
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

function Thumbnail(props) {
  //console.log(props)
  function handleClick() {
    //console.log("button clicked");
    const index = props.vectorArray.findIndex(
      (vector) => vector.name === props.name
    );
    //console.log(index)
    props.setCount(index);
    props.setOpen(false);
  }

  return (
    <button onClick={handleClick} className={styles.thumbnailWrapper}>
      <ReactSVG
        className={styles.vectorThumbnail}
        src={`data:image/svg+xml;utf8,${encodeURIComponent(props.graphic)}`}
        afterInjection={(svg) => {
          svg.setAttribute("style", "fill:white;");
        }}
      />
      <p>{props.name}</p>
    </button>
  );
}
