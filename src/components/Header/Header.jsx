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
            width="46"
            viewBox="0 0 837 837"
          >
            <g id="c" data-name="Layer 14 copy">
              <path
                d="M802,368.5h-184.610107c-8.889893-35.630127-27.290039-68.310059-53.929932-94.950195-26.640137-26.639893-59.330078-45.049805-94.959961-53.939941V35c0-19.330078-15.670166-35-35-35h-30c-19.330078,0-35,15.669922-35,35v184.609863c-35.630127,8.890137-68.310059,27.300049-94.950195,53.939941-26.639893,26.640137-45.049805,59.320068-53.939941,94.950195H35c-19.330078,0-35,15.669922-35,35v30c0,19.329834,15.669922,35,35,35h184.609863c8.890137,35.629883,27.300049,68.319824,53.939941,94.959961,26.640137,26.639893,59.320068,45.040039,94.950195,53.929932v184.610107c0,19.329834,15.669922,35,35,35h30c19.329834,0,35-15.670166,35-35v-184.610107c35.629883-8.880127,68.319824-27.290039,94.959961-53.929932,26.639893-26.640137,45.050049-59.330078,53.929932-94.959961h184.610107c19.330078,0,35-15.670166,35-35v-30c0-19.330078-15.669922-35-35-35ZM812,428.5c0,8.289795-6.709961,15-15,15h-202.110107c-1.179932,8.459961-2.97998,16.809814-5.379883,25-1.910156,6.549805-4.219971,13.009766-6.900146,19.349854-8.97998,21.219971-21.810059,40.26001-38.159912,56.610107-16.340088,16.339844-35.380127,29.179932-56.600098,38.149902-6.349854,2.679932-12.800049,4.97998-19.349854,6.899902-8.189941,2.400146-16.530029,4.189941-25,5.380127v202.110107c0,8.289795-6.709961,15-15,15h-20c-8.280029,0-15-6.710205-15-15v-202.110107c-8.459961-1.190186-16.800049-2.97998-25-5.380127-6.550049-1.919922-13-4.219971-19.350098-6.899902-21.209961-8.969971-40.26001-21.810059-56.600098-38.149902-16.339844-16.350098-29.179932-35.390137-38.149902-56.610107-2.679932-6.340088-4.97998-12.800049-6.899902-19.349854-2.400146-8.190186-4.200195-16.540039-5.380127-25H40c-8.280029,0-15-6.710205-15-15v-20c0-8.280273,6.719971-15,15-15h202.119873c1.190186-8.460205,2.97998-16.810059,5.380127-25,1.919922-6.550293,4.219971-13,6.899902-19.340088,8.969971-21.219971,21.810059-40.26001,38.149902-56.610107,16.340088-16.339844,35.390137-29.179932,56.600098-38.149902,6.350098-2.680176,12.800049-4.98999,19.350098-6.899902,8.199951-2.400146,16.540039-4.190186,25-5.380127V40c0-8.280273,6.719971-15,15-15h20c8.290039,0,15,6.719727,15,15v202.119873c8.469971,1.189941,16.810059,2.97998,25,5.380127,6.549805,1.909912,13,4.219727,19.349854,6.899902,21.219971,8.969971,40.26001,21.810059,56.600098,38.149902,16.349854,16.350098,29.179932,35.390137,38.159912,56.610107,2.680176,6.340088,4.97998,12.789795,6.900146,19.340088,2.399902,8.189941,4.189941,16.539795,5.379883,25h202.110107c8.290039,0,15,6.719727,15,15v20ZM548.625,418.5c0,71.866053-58.258947,130.125-130.125,130.125s-130.125-58.258947-130.125-130.125,58.258947-130.125,130.125-130.125,130.125,58.258947,130.125,130.125Z"
                
              />
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
