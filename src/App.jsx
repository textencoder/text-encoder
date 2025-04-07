import { useState, useEffect } from "react";
import { parse, stringify } from "svgson";
import { ReactSVG } from "react-svg";

function App() {
  const [vector, setVector] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("../public/db.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const vector = stringify(data[count].data);
        setVector(vector);
      });
  }, [count]);

  return (
    <>
      <ReactSVG
        beforeInjection={(svg) => {
          svg.setAttribute('style', 'fill: blue;');
        }}
        src={`data:image/svg+xml;utf8,${encodeURIComponent(vector)}`}
      />
      <button onClick={() => setCount(count - 1)} disabled={count == 0}>
        prev
      </button>
      <button onClick={() => setCount(count + 1)} disabled={count == 2}>
        next
      </button>
    </>
  );
}

export default App;
