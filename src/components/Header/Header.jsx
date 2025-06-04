import { Popover, ScrollArea } from "radix-ui";
import { useState, useEffect } from "react";
import { stringify } from "svgson";
import { ReactSVG } from "react-svg";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header>
      <Link to="/">
      <button className={styles.share}>
        <svg id="b" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 583.4 583.4" fill="#ffffff"><g id="c"><path d="M276.73,245.57c-1.88.44-3.67-.99-3.67-2.92v-27.53c0-8.1-1.21-16.15-3.6-23.89l-22.93-74.28c-2.34-7.58-3.15-15.54-2.4-23.44l7.59-79.05c.37-3.82,2.89-7.08,6.48-8.42C266.17,3.08,277.67,0,291.7,0c14.03,0,25.54,3.08,33.49,6.04,3.6,1.34,6.11,4.6,6.48,8.42l7.59,79.05c.76,7.89-.06,15.86-2.4,23.44l-22.93,74.28c-2.39,7.74-3.6,15.79-3.6,23.89v27.53c0,1.93-1.79,3.36-3.67,2.92-4.06-.94-9.13-1.71-14.97-1.71-5.84,0-10.91.77-14.97,1.71Z" /><path d="M276.73,337.83c-1.88-.44-3.67.99-3.67,2.92v27.53c0,8.1-1.21,16.15-3.6,23.89l-22.93,74.28c-2.34,7.58-3.15,15.54-2.4,23.44l7.59,79.05c.37,3.82,2.89,7.08,6.48,8.42,7.95,2.96,19.46,6.04,33.49,6.04,14.03,0,25.54-3.08,33.49-6.04,3.6-1.34,6.11-4.6,6.48-8.42l7.59-79.05c.76-7.89-.06-15.86-2.4-23.44l-22.93-74.28c-2.39-7.74-3.6-15.79-3.6-23.89v-27.53c0-1.93-1.79-3.36-3.67-2.92-4.06.94-9.13,1.71-14.97,1.71s-10.91-.77-14.97-1.71Z" /><path d="M337.83,276.73c-.44-1.88.99-3.67,2.92-3.67h27.53c8.1,0,16.15-1.21,23.89-3.6l74.28-22.93c7.58-2.34,15.54-3.15,23.44-2.4l79.05,7.59c3.82.37,7.08,2.89,8.42,6.48,2.96,7.95,6.04,19.46,6.04,33.49,0,14.03-3.08,25.54-6.04,33.49-1.34,3.6-4.6,6.11-8.42,6.48l-79.05,7.59c-7.89.76-15.86-.06-23.44-2.4l-74.28-22.93c-7.74-2.39-15.79-3.6-23.89-3.6h-27.53c-1.93,0-3.36-1.79-2.92-3.67.94-4.06,1.71-9.13,1.71-14.97s-.77-10.91-1.71-14.97Z" /><path d="M245.57,276.73c.44-1.88-.99-3.67-2.92-3.67h-27.53c-8.1,0-16.15-1.21-23.89-3.6l-74.28-22.93c-7.58-2.34-15.54-3.15-23.44-2.4l-79.05,7.59c-3.82.37-7.08,2.89-8.42,6.48C3.08,266.17,0,277.67,0,291.7c0,14.03,3.08,25.54,6.04,33.49,1.34,3.6,4.6,6.11,8.42,6.48l79.05,7.59c7.89.76,15.86-.06,23.44-2.4l74.28-22.93c7.74-2.39,15.79-3.6,23.89-3.6h27.53c1.93,0,3.36-1.79,2.92-3.67-.94-4.06-1.71-9.13-1.71-14.97s.77-10.91,1.71-14.97Z" /><circle cx="291.7" cy="291.7" r="25" /></g></svg>
      </button>
      </Link>

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
