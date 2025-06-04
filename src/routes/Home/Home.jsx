import styles from "./Home.module.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom"

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
      <div className={styles.background}>
        <div className={styles.logo}></div>

        <ul className="aktiv-regular">
          <Link to="/lab">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              
              fill="#e3e3e3"
            >
              <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
           <p>About</p>
          </li>
          </Link>
          <Link to="/lab">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              
              fill="#e3e3e3"
            >
              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
            </svg>
            <p>Shop</p>
          </li>
          </Link>
          <Link to="/lab">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="18px"
              fill="#e8eaed"
            >
              <path d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm80-120h400L544-400H416L280-240Zm-80 40h560L520-492v-268h-80v268L200-200Zm280-280Z" />
            </svg>
           <p>Lab</p>
          </li>
           </Link>
        </ul>
      </div>
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
