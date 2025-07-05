import { ReactSVG } from "react-svg";
import styles from "./Viewport.module.css";

export default function Viewport(props) {
  return (
    <div className={styles.viewportOuter}>
      <ReactSVG
        // style={{
        //   backgroundColor: `rgba(${props.backgroundColor.r}, ${props.backgroundColor.g}, ${props.backgroundColor.b}, ${props.backgroundColor.a})`,
        // }}
        afterInjection={(svg) => {
          svg.setAttribute(
            "style",
            `fill: rgba(${props.primaryColor.r}, ${props.primaryColor.g}, ${
              props.primaryColor.b
            }, ${props.primaryColor.a}); transform: scale(${props.zoom / 100})`
          );
          //svg.setAttribute('style', `transform: scale(${props.zoom / 100})`)
        }}
        src={`data:image/svg+xml;utf8,${encodeURIComponent(props.vector)}`}
      />
    </div>
  );
}

import { useMove } from "react-aria";
import React from "react";

function ViewportMove(props) {
  const CONTAINER_SIZE = 200;
  const BALL_SIZE = 30;

  let [events, setEvents] = React.useState([]);
  let [color, setColor] = React.useState("black");
  let [position, setPosition] = React.useState({
    x: 0,
    y: 0,
  });

  let clamp = (pos) => Math.min(Math.max(pos, 0), CONTAINER_SIZE - BALL_SIZE);
  let { moveProps } = useMove({
    onMoveStart(e) {
      setColor("red");
      setEvents((events) => [
        `move start with pointerType = ${e.pointerType}`,
        ...events,
      ]);
    },
    onMove(e) {
      setPosition(({ x, y }) => {
        // Normally, we want to allow the user to continue
        // dragging outside the box such that they need to
        // drag back over the ball again before it moves.
        // This is handled below by clamping during render.
        // If using the keyboard, however, we need to clamp
        // here so that dragging outside the container and
        // then using the arrow keys works as expected.
        if (e.pointerType === "keyboard") {
          x = clamp(x);
          y = clamp(y);
        }

        x += e.deltaX;
        y += e.deltaY;
        return { x, y };
      });

      setEvents((events) => [
        `move with pointerType = ${e.pointerType}, deltaX = ${e.deltaX}, deltaY = ${e.deltaY}`,
        ...events,
      ]);
    },
    onMoveEnd(e) {
      setPosition(({ x, y }) => {
        // Clamp position on mouse up
        x = clamp(x);
        y = clamp(y);
        return { x, y };
      });
      setColor("black");
      setEvents((events) => [
        `move end with pointerType = ${e.pointerType}`,
        ...events,
      ]);
    },
  });

  return (
    <>
      <div
        className={styles.viewportOuter}
        style={{
          position: "relative",
          touchAction: "none",
        }}
      >
        <ReactSVG
          {...moveProps}
          tabIndex={0}
          style={{
            position: "absolute",
            left: clamp(position.x),
            top: clamp(position.y),
          }}
          afterInjection={(svg) => {
            svg.setAttribute(
              "style",
              `fill: rgba(${props.primaryColor.r}, ${props.primaryColor.g}, ${
                props.primaryColor.b
              }, ${props.primaryColor.a}); transform: scale(${
                props.zoom / 100
              })`
            );
            //svg.setAttribute('style', `transform: scale(${props.zoom / 100})`)
          }}
          src={`data:image/svg+xml;utf8,${encodeURIComponent(props.vector)}`}
        />
      </div>
    </>
  );
}
