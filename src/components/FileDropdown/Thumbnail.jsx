import { ReactSVG } from "react-svg";
import styles from "../Header/Header.module.css";

export default function Thumbnail(props) {
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
