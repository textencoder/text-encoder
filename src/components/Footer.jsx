import {useState} from 'react';

export default function Footer(props) {
    

    return (
        <footer>
        <div>
          {/* <button>1</button> */}
          <input type="color" defaultValue={props.primaryColor} name="primary-color" id="primary-color" onChange={props.handleColorChange} />
          <button>2</button>
          <button>BG</button>
        </div>
      </footer>
    )
}