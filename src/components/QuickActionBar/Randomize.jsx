export default function RandomizeButton(props) {
  
  function handleRandomize() {
    props.setPrimaryColor({
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
      a: 1
    })
    props.setBackgroundColor({
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
      a: 1
    })
  }

  return (
    <button onClick={handleRandomize} title={props.layer}>
      {props.icon}
    </button>
  );
}