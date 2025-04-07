import { ReactSVG } from "react-svg";

export default function Viewport(props) {
    return (
        <div className="viewport-outer">
        <ReactSVG
                className="viewport-inner"
                 beforeInjection={(svg) => {
                   svg.setAttribute('style', 'fill: orange;');
                 }}
                src={`data:image/svg+xml;utf8,${encodeURIComponent(props.vector)}`}
              />
        </div>
    )
}