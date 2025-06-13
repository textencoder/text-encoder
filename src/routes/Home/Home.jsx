import styles from "./Home.module.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

export default function Home() {
  const nouns = ["Redefined", "Reimagined", "Rewritten", "Recharged"];

  return (
    <div className={styles.homepage}>
      <Nav />

      <div className={styles.splash}>
        <Heading />
        <Link to="/lab">
          <button className="aktiv-regular">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm80-120h400L544-400H416L280-240Zm-80 40h560L520-492v-268h-80v268L200-200Zm280-280Z" />
            </svg>
            <p>Enter the Lab</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <div className={styles.logo}>
        {/* <svg
          id="b"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          viewBox="0 0 21.373337 24"
          fill="white"
        >
          <g id="c" data-name="Layer 4">
            <path d="M17.937442,16.243981l.257117-8.466155c1.810924-.347797,3.178778-1.941013,3.178778-3.853329,0-2.16714-1.756976-3.924497-3.924497-3.924497s-3.924497,1.757357-3.924497,3.924497c0,.450721.07614.88346.216179,1.286739l-6.972421,4.159422c-.714727-.751459-1.724453-1.219781-2.843606-1.219781-2.167521,0-3.924495,1.757357-3.924495,3.924497,0,2.167523,1.756974,3.924497,3.924495,3.924497.92976,0,1.784524-.323311,2.456781-.864332l6.92727,3.874758c-.095654.338617-.14654.695979-.14654,1.065205,0,2.167521,1.757357,3.924497,3.924495,3.924497,2.167523,0,3.92488-1.756976,3.92488-3.924497,0-1.875204-1.315436-3.443165-3.073939-3.831522ZM7.433854,13.83388c.265536-.528776.415138-1.12604.415138-1.758506,0-.454549-.077287-.891113-.220004-1.297451l6.968594-4.156746c.517298.546758,1.189939.94468,1.947519,1.122978l-.257883,8.488347c-.878488.181743-1.649842.657335-2.205785,1.319261l-6.647578-3.717883Z" />
          </g>
        </svg> */}
        <img src="/t3d.png" alt="" width="120"/>
      </div>

      <Link to="/lab" className={`aktiv-regular ${styles.labLink}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          fill="#e8eaed"
        >
          <path d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm80-120h400L544-400H416L280-240Zm-80 40h560L520-492v-268h-80v268L200-200Zm280-280Z" />
        </svg>
        
      </Link>
    </nav>
  );
}

function Heading() {
  const reWords = ["Redefined", "Rewritten", "Reimagined"];

  return (
    <>
      <h1 className="alfabet-semibold first-heading">Language Arts</h1>
      <h1 className="alfabet-semibold second-heading">
        <Typewriter
          options={{
            strings: reWords,
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </>
  );
}
