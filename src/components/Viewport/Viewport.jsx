import { ReactSVG } from "react-svg";
import styles from "./Viewport.module.css"

export default function Viewport(props) {

    return (
        <div className={styles.viewportOuter}>
        <ReactSVG
                className={styles.viewportInner}
                style={{backgroundColor: `rgba(${props.backgroundColor.r}, ${props.backgroundColor.g}, ${props.backgroundColor.b}, ${props.backgroundColor.a})`}}
                 afterInjection={(svg) => {
                   svg.setAttribute('style', `fill: rgba(${props.primaryColor.r}, ${props.primaryColor.g}, ${props.primaryColor.b}, ${props.primaryColor.a}); transform: scale(${props.zoom / 100})`);
                   //svg.setAttribute('style', `transform: scale(${props.zoom / 100})`)
                  }}
                src={`data:image/svg+xml;utf8,${encodeURIComponent(props.vector)}`}
              />
        </div>
    )
}