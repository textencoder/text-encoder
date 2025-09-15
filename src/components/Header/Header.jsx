import styles from "./Header.module.css";
import VectorSelect from "../VectorSelect/VectorSelect";
import RandomButton from "../RandomButton/RandomButton";
import GridToggleButton from "../GridToggleButton/GridToggleButton";
import StatsToggleButton from "../StatsToggleButton/StatsToggleButton";
import ShuffleCountButton from "../ShuffleCountButton/ShuffleCountButton";
import ModalMenu from "../ModalMenu/ModalMenu";

export default function Header(props) {

  console.log("header props: ", props)
  return (
    <header className={styles.header}>

      <div style={{ display: "flex", gap: 10 }}>
        <StatsToggleButton
          style={
            props.toggleControls
              ? { color: "white", border: "1px solid white" }
              : { color: "gray", border: "1px solid gray" }
          }
          toggleControls={props.toggleControls}
          setToggleControls={props.setToggleControls}
        />
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

      {/* <div style={{display: "flex", gap: 10}}>
        <ShuffleCountButton count={props.count} setCount={props.setCount} /> */}

          <ModalMenu vectorArray={props.vectorArray} setCount={props.setCount} />

        {/* <VectorSelect /> */}
      {/* </div> */}
    </header>
  );
}
