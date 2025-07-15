import styles from "./Header.module.css";
import VectorSelect from "../VectorSelect/VectorSelect";
import RandomButton from "../RandomButton/RandomButton";
import GridToggleButton from "../GridToggleButton/GridToggleButton";

export default function Header(props) {
  return (
    <header className={styles.header}>
      {/* <div className={styles.logo}>
        <svg
          id="b"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          viewBox="0 0 24 23.005342"
        >
          <g id="c" data-name="Layer 1">
            <path
              d="M9.777878,21.712422c0-1.093179,1.460271-1.689704,2.453579-2.48597,1.492662-1.22544,2.321318-1.921835,3.249845-2.850363,3.911151-3.944891,5.965248-7.55778,5.965248-10.441883,0-2.287578-1.325311-3.414497-4.075803-3.414497C11.435191,2.51971,2.51971,7.723781,2.51971,10.972277c0,.564134.296913.762526,1.392791.762526,2.782883,0,6.496992-1.591183,8.286566-3.514368.164652-.164652,1.457572-1.623573,2.386099-1.623573.596525,0,1.19305.596525,1.19305,1.19305,0,.728786-1.160659,1.723444-1.722094,2.253838-3.149975,2.651971-6.996345,4.276894-10.11123,4.276894-2.55345,0-3.944891-1.094528-3.944891-3.116235C0,6.166339,9.513355,0,17.103526,0c4.343024,0,6.896474,2.187707,6.896474,5.966597,0,4.110892-3.249845,9.116572-9.382444,14.585166-.529045.464264-2.718102,2.453579-3.646629,2.453579-.628915,0-1.19305-.628915-1.19305-1.29292Z"
              fill="#fff"
            />
          </g>
        </svg>
      </div> */}

        <div style={{ display: "flex", gap: 10 }}>
          <GridToggleButton
            style={
              props.toggleGrid
                ? { color: "white", border: "1px solid white" }
                : { color: "gray", border: "1px solid gray" }
            }
            setToggleGrid={props.setToggleGrid}
          />
          <RandomButton
            setPrimaryColor={props.setPrimaryColor}
            setSecondaryColor={props.setSecondaryColor}
            setBackgroundColor={props.setBackgroundColor}
          />
        </div>

        <VectorSelect />

    </header>
  );
}
