import { ReactSVG } from "react-svg";
import styles from "./Viewport.module.css"

export default function Viewport(props) {

  console.log(styles)
    return (
        <div className={styles.viewportOuter}>
        <ReactSVG
                className={styles.viewportInner}
                style={{backgroundColor: `rgba(${props.backgroundColor.r}, ${props.backgroundColor.g}, ${props.backgroundColor.b}, ${props.backgroundColor.a})`}}
                 afterInjection={(svg) => {
                   svg.setAttribute('style', `fill: rgba(${props.primaryColor.r}, ${props.primaryColor.g}, ${props.primaryColor.b}, ${props.primaryColor.a})`);
                 }}
                src={`data:image/svg+xml;utf8,${encodeURIComponent(props.vector)}`}
              />
        </div>
    )
}