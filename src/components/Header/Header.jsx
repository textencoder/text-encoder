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
        <button className={styles.home}>
          <svg
            id="b"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
           
            height="40"
            viewBox="0 0 21.373337 24"
            fill="white"
          >
            <g id="c" data-name="Layer 4">
              <path d="M17.937442,16.243981l.257117-8.466155c1.810924-.347797,3.178778-1.941013,3.178778-3.853329,0-2.16714-1.756976-3.924497-3.924497-3.924497s-3.924497,1.757357-3.924497,3.924497c0,.450721.07614.88346.216179,1.286739l-6.972421,4.159422c-.714727-.751459-1.724453-1.219781-2.843606-1.219781-2.167521,0-3.924495,1.757357-3.924495,3.924497,0,2.167523,1.756974,3.924497,3.924495,3.924497.92976,0,1.784524-.323311,2.456781-.864332l6.92727,3.874758c-.095654.338617-.14654.695979-.14654,1.065205,0,2.167521,1.757357,3.924497,3.924495,3.924497,2.167523,0,3.92488-1.756976,3.92488-3.924497,0-1.875204-1.315436-3.443165-3.073939-3.831522ZM7.433854,13.83388c.265536-.528776.415138-1.12604.415138-1.758506,0-.454549-.077287-.891113-.220004-1.297451l6.968594-4.156746c.517298.546758,1.189939.94468,1.947519,1.122978l-.257883,8.488347c-.878488.181743-1.649842.657335-2.205785,1.319261l-6.647578-3.717883Z" />
            </g>
          </svg>
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
