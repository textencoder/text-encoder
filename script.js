const primaryColor = document.getElementById('primary-color');
const secondaryColor = document.getElementById('secondary-color');
const backgroundColor = document.getElementById('background-color');
const background = document.getElementById('editor-viewport');
const zoomIn = document.getElementById('zoom-in');
const zoomOut = document.getElementById('zoom-out');
const toggleView = document.getElementById('toggle-view');
const editorWindow = document.getElementById('editor-window');
const svgSelectWindow = document.getElementById('svg-select');
const svgSelectDivTitle = document.getElementById('svg-select-div-title');
const helpWindow = document.getElementById('help-window');
const helpButton = document.getElementById('help-button');
const homeButton = document.getElementById('textencoder');
const fileNameContainer = document.getElementById('file-name');
const inlineContainer = document.getElementById('inline-container');
const previousButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

//inline svg code array
const svgArray = [
  {
    name: "rodeo1.svg",
    inline: `<?xml version="1.0" encoding="UTF-8"?>
                <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 624.36 116.5">
                    <g id="b" >
                        <path d="M587.86,23.69h-58.25c-14.15,0-27.47,5.51-37.49,15.52-.94.95-1.85,1.92-2.71,2.92l.04-.23c.72-4.56-.58-9.18-3.58-12.69-3-3.51-7.36-5.52-11.98-5.52h-52.64c-17.55,0-33.27,8.15-43.32,21.17l4.58-28.94c.64-3.97-.49-8.02-3.11-11.08-2.61-3.07-6.43-4.84-10.47-4.84h-19.55c-7.73,0-14.21,5.55-15.41,13.17l-2.14,13.48c-2.38-1.74-5.28-2.69-8.3-2.69h-32.25c-.39,0-.8,0-1.1.01-20.48.43-38.31,12.6-46.53,30.44-2.77-17.39-17.88-30.72-36.04-30.72h-58.25c-13.96,0-27.1,5.36-37.07,15.12-.29-3.41-1.63-6.68-3.9-9.34-3.14-3.68-7.71-5.78-12.54-5.78H27.31c-8.78,0-16.16,6.29-17.53,14.96L.19,99.2c-.68,4.26.53,8.58,3.33,11.85,2.8,3.28,6.88,5.16,11.19,5.16h18.08c8.78,0,16.14-6.29,17.52-14.96l5.93-37.45h33.57c3.03,0,5.92-.6,8.56-1.69-1.33,4.69-2.02,9.59-2.02,14.59,0,21.94,17.85,39.8,39.79,39.8h55.09c21.46,0,39.98-12.86,48.26-31.28,1.35,6.35,4.27,12.34,8.6,17.4,7.53,8.82,18.51,13.88,30.11,13.88h75.05c7.72,0,14.2-5.53,15.42-13.16l1.65-10.43c6.36,13.91,20.42,23.59,36.71,23.59h54.78c9.17,0,16.87-6.58,18.3-15.64l.79-5.01c.05-.32.09-.63.12-.95,6.61,12.82,19.98,21.6,35.37,21.6h55.09c29.16,0,52.88-23.73,52.88-52.89v-3.43c0-20.12-16.38-36.49-36.5-36.49ZM191.23,66.81c-.49,3.13-2.09,5.99-4.53,8.06-2.41,2.06-5.48,3.2-8.65,3.2h-29.91c-2.88,0-4.66-1.58-5.46-2.52s-2.08-2.94-1.63-5.79l1.22-7.67c1.22-7.72,7.77-13.32,15.59-13.32h1.82l-1.62,10.25h26.53c2.69,0,4.36,1.48,5.11,2.36s1.95,2.76,1.53,5.43ZM323.21,81.08h-23.56c-2.6,0-4.21-1.42-4.94-2.27-.72-.85-1.88-2.66-1.48-5.23.52-3.26,2.18-6.23,4.68-8.36,2.5-2.14,5.69-3.31,8.98-3.31h13.1c2.29,0,4.48-.47,6.46-1.31l-3.24,20.48ZM571.48,66.81c-.49,3.13-2.09,5.99-4.53,8.06-2.4,2.06-5.48,3.2-8.65,3.2h-29.91c-2.88,0-4.66-1.58-5.46-2.52s-2.08-2.94-1.63-5.79l1.22-7.67c1.22-7.72,7.78-13.32,15.59-13.32h1.82l-1.62,10.25h26.53c2.69,0,4.36,1.48,5.11,2.36.64.75,1.62,2.24,1.62,4.32,0,.36-.03.72-.09,1.11Z" />
                    </g>
                    <g id="c" fill="#fff">
                        <path d="M246.99,71.95l.4-2.52c3.36-21.28,21.5-37.02,42.95-37.47.31-.01.63-.01.94-.01h32.25c3.75,0,6.62,3.35,6.03,7.05l-1.23,7.78c-.65,4.1-4.19,7.12-8.34,7.12h-13.1c-5.37,0-10.34,1.95-14.18,5.23-3.84,3.28-6.54,7.88-7.38,13.19-1.39,8.8,5.41,16.76,14.32,16.76h14.43l-1.53,10.15h15.95l1.54-10.15,5.57-35.18,3.48-21.95,2.78-17.53c.58-3.7,3.77-6.42,7.51-6.42h19.55c3.54,0,6.24,3.16,5.68,6.65l-13.84,87.43c-.59,3.69-3.77,6.41-7.52,6.41h-75.05c-19.43,0-34.25-17.35-31.21-36.54Z" />
                        <path d="M587.85,31.68h-58.25c-12.43,0-23.68,5.04-31.83,13.18-8.14,8.15-13.18,19.4-13.18,31.83,0,17.56,14.23,31.8,31.79,31.8h55.09c24.79,0,44.88-20.1,44.88-44.89v-3.42c0-15.74-12.76-28.5-28.5-28.5ZM579.38,68.05c-.82,5.19-3.47,9.69-7.23,12.89-3.75,3.21-8.61,5.12-13.86,5.12h-29.91c-9.33,0-16.45-8.34-14.99-17.56l1.22-7.67c1.83-11.56,11.79-20.06,23.49-20.06h10.02c.62,0,1.09.54.99,1.15l-1.44,9.1h17.16c9.05,0,15.96,8.09,14.55,17.03Z" />
                        <path d="M207.6,31.68h-58.25c-12.43,0-23.68,5.04-31.83,13.18-8.14,8.15-13.18,19.4-13.18,31.83,0,17.56,14.23,31.8,31.79,31.8h55.09c24.79,0,44.88-20.1,44.88-44.89v-3.42c0-15.74-12.76-28.5-28.5-28.5ZM199.13,68.05c-.82,5.19-3.47,9.69-7.23,12.89-3.75,3.21-8.61,5.12-13.86,5.12h-29.91c-9.33,0-16.45-8.34-14.99-17.56l1.22-7.67c1.83-11.56,11.79-20.06,23.49-20.06h10.02c.62,0,1.09.54.99,1.15l-1.44,9.1h17.16c9.05,0,15.96,8.09,14.55,17.03Z" />
                        <path d="M473.89,31.68c4.76,0,8.4,4.26,7.66,8.96l-.54,3.41c-.77,4.76-4.88,8.27-9.71,8.27h-29.92c-.61,0-1.08-.55-.99-1.16l1.53-9.61h-5.61c-6.47,0-12.47,2.35-17.1,6.3-4.63,3.95-7.89,9.51-8.9,15.9-1.88,11.87,7.29,22.61,19.31,22.61h36.35c4.38,0,7.72,3.91,7.04,8.24l-.79,5c-.81,5.12-5.22,8.89-10.4,8.89h-54.78c-18.12,0-32.34-14.77-32.34-32.27,0-1.68.14-3.39.41-5.12,3.59-22.7,23.17-39.42,46.15-39.42h52.64Z" />
                        <path d="M477.81,64.22v.03c0,.21-.04.42-.07.63l-1,6.31c-.03.2-.07.4-.13.6.01.02.01.04-.01.06-1.02,4.51-5.03,7.75-9.71,7.75h-37.16c-4.12,0-7.26-3.67-6.62-7.74l1.01-6.34c.71-4.47,4.55-7.75,9.07-7.75h38.48c3.56,0,6.31,2.99,6.14,6.45Z" />
                        <path d="M104.24,41.52l-.35,2.27c-1.1,6.92-7.07,12.02-14.08,12.02h-24.46l1.61-10.15h-15.94l-1.61,10.15-7,44.19c-.75,4.73-4.83,8.22-9.62,8.22H14.71c-4.12,0-7.27-3.68-6.62-7.75l9.59-60.56c.75-4.73,4.83-8.22,9.63-8.22h68.54c5.22,0,9.21,4.67,8.39,9.83Z" />
                    </g>
                </svg>`,
  },
  {
    name: "rodeo2.svg",
    inline: `<?xml version="1.0" encoding="UTF-8"?>
                <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 624.36 116.5">
                    <g id="b" >
                        <path d="M587.86,23.69h-58.25c-14.15,0-27.47,5.51-37.49,15.52-.94.95-1.85,1.92-2.71,2.92l.04-.23c.72-4.56-.58-9.18-3.58-12.69-3-3.51-7.36-5.52-11.98-5.52h-52.64c-17.55,0-33.27,8.15-43.32,21.17l4.58-28.94c.64-3.97-.49-8.02-3.11-11.08-2.61-3.07-6.43-4.84-10.47-4.84h-19.55c-7.73,0-14.21,5.55-15.41,13.17l-2.14,13.48c-2.38-1.74-5.28-2.69-8.3-2.69h-32.25c-.39,0-.8,0-1.1.01-20.48.43-38.31,12.6-46.53,30.44-2.77-17.39-17.88-30.72-36.04-30.72h-58.25c-13.96,0-27.1,5.36-37.07,15.12-.29-3.41-1.63-6.68-3.9-9.34-3.14-3.68-7.71-5.78-12.54-5.78H27.31c-8.78,0-16.16,6.29-17.53,14.96L.19,99.2c-.68,4.26.53,8.58,3.33,11.85,2.8,3.28,6.88,5.16,11.19,5.16h18.08c8.78,0,16.14-6.29,17.52-14.96l5.93-37.45h33.57c3.03,0,5.92-.6,8.56-1.69-1.33,4.69-2.02,9.59-2.02,14.59,0,21.94,17.85,39.8,39.79,39.8h55.09c21.46,0,39.98-12.86,48.26-31.28,1.35,6.35,4.27,12.34,8.6,17.4,7.53,8.82,18.51,13.88,30.11,13.88h75.05c7.72,0,14.2-5.53,15.42-13.16l1.65-10.43c6.36,13.91,20.42,23.59,36.71,23.59h54.78c9.17,0,16.87-6.58,18.3-15.64l.79-5.01c.05-.32.09-.63.12-.95,6.61,12.82,19.98,21.6,35.37,21.6h55.09c29.16,0,52.88-23.73,52.88-52.89v-3.43c0-20.12-16.38-36.49-36.5-36.49ZM191.23,66.81c-.49,3.13-2.09,5.99-4.53,8.06-2.41,2.06-5.48,3.2-8.65,3.2h-29.91c-2.88,0-4.66-1.58-5.46-2.52s-2.08-2.94-1.63-5.79l1.22-7.67c1.22-7.72,7.77-13.32,15.59-13.32h1.82l-1.62,10.25h26.53c2.69,0,4.36,1.48,5.11,2.36s1.95,2.76,1.53,5.43ZM323.21,81.08h-23.56c-2.6,0-4.21-1.42-4.94-2.27-.72-.85-1.88-2.66-1.48-5.23.52-3.26,2.18-6.23,4.68-8.36,2.5-2.14,5.69-3.31,8.98-3.31h13.1c2.29,0,4.48-.47,6.46-1.31l-3.24,20.48ZM571.48,66.81c-.49,3.13-2.09,5.99-4.53,8.06-2.4,2.06-5.48,3.2-8.65,3.2h-29.91c-2.88,0-4.66-1.58-5.46-2.52s-2.08-2.94-1.63-5.79l1.22-7.67c1.22-7.72,7.78-13.32,15.59-13.32h1.82l-1.62,10.25h26.53c2.69,0,4.36,1.48,5.11,2.36.64.75,1.62,2.24,1.62,4.32,0,.36-.03.72-.09,1.11Z" />
                    </g>
                    <g id="c" fill="#fff">
                        <path d="M246.99,71.95l.4-2.52c3.36-21.28,21.5-37.02,42.95-37.47.31-.01.63-.01.94-.01h32.25c3.75,0,6.62,3.35,6.03,7.05l-1.23,7.78c-.65,4.1-4.19,7.12-8.34,7.12h-13.1c-5.37,0-10.34,1.95-14.18,5.23-3.84,3.28-6.54,7.88-7.38,13.19-1.39,8.8,5.41,16.76,14.32,16.76h14.43l-1.53,10.15h15.95l1.54-10.15,5.57-35.18,3.48-21.95,2.78-17.53c.58-3.7,3.77-6.42,7.51-6.42h19.55c3.54,0,6.24,3.16,5.68,6.65l-13.84,87.43c-.59,3.69-3.77,6.41-7.52,6.41h-75.05c-19.43,0-34.25-17.35-31.21-36.54Z" />
                        <path d="M587.85,31.68h-58.25c-12.43,0-23.68,5.04-31.83,13.18-8.14,8.15-13.18,19.4-13.18,31.83,0,17.56,14.23,31.8,31.79,31.8h55.09c24.79,0,44.88-20.1,44.88-44.89v-3.42c0-15.74-12.76-28.5-28.5-28.5ZM579.38,68.05c-.82,5.19-3.47,9.69-7.23,12.89-3.75,3.21-8.61,5.12-13.86,5.12h-29.91c-9.33,0-16.45-8.34-14.99-17.56l1.22-7.67c1.83-11.56,11.79-20.06,23.49-20.06h10.02c.62,0,1.09.54.99,1.15l-1.44,9.1h17.16c9.05,0,15.96,8.09,14.55,17.03Z" />
                        <path d="M207.6,31.68h-58.25c-12.43,0-23.68,5.04-31.83,13.18-8.14,8.15-13.18,19.4-13.18,31.83,0,17.56,14.23,31.8,31.79,31.8h55.09c24.79,0,44.88-20.1,44.88-44.89v-3.42c0-15.74-12.76-28.5-28.5-28.5ZM199.13,68.05c-.82,5.19-3.47,9.69-7.23,12.89-3.75,3.21-8.61,5.12-13.86,5.12h-29.91c-9.33,0-16.45-8.34-14.99-17.56l1.22-7.67c1.83-11.56,11.79-20.06,23.49-20.06h10.02c.62,0,1.09.54.99,1.15l-1.44,9.1h17.16c9.05,0,15.96,8.09,14.55,17.03Z" />
                        <path d="M473.89,31.68c4.76,0,8.4,4.26,7.66,8.96l-.54,3.41c-.77,4.76-4.88,8.27-9.71,8.27h-29.92c-.61,0-1.08-.55-.99-1.16l1.53-9.61h-5.61c-6.47,0-12.47,2.35-17.1,6.3-4.63,3.95-7.89,9.51-8.9,15.9-1.88,11.87,7.29,22.61,19.31,22.61h36.35c4.38,0,7.72,3.91,7.04,8.24l-.79,5c-.81,5.12-5.22,8.89-10.4,8.89h-54.78c-18.12,0-32.34-14.77-32.34-32.27,0-1.68.14-3.39.41-5.12,3.59-22.7,23.17-39.42,46.15-39.42h52.64Z" />
                        <path d="M477.81,64.22v.03c0,.21-.04.42-.07.63l-1,6.31c-.03.2-.07.4-.13.6.01.02.01.04-.01.06-1.02,4.51-5.03,7.75-9.71,7.75h-37.16c-4.12,0-7.26-3.67-6.62-7.74l1.01-6.34c.71-4.47,4.55-7.75,9.07-7.75h38.48c3.56,0,6.31,2.99,6.14,6.45Z" />
                        <path d="M104.24,41.52l-.35,2.27c-1.1,6.92-7.07,12.02-14.08,12.02h-24.46l1.61-10.15h-15.94l-1.61,10.15-7,44.19c-.75,4.73-4.83,8.22-9.62,8.22H14.71c-4.12,0-7.27-3.68-6.62-7.75l9.59-60.56c.75-4.73,4.83-8.22,9.63-8.22h68.54c5.22,0,9.21,4.67,8.39,9.83Z" />
                    </g>
                </svg>`,
  },
  
]

//wait for editor to load
window.addEventListener("load", primarySelect, false);
window.addEventListener("load", secondarySelect, false);
window.addEventListener("load", backgroundSelect, false);

//insert inline svg on load
function loadSvg(index) {
     fileNameContainer.innerText = svgArray[index].name;
     inlineContainer.innerHTML = svgArray[index].inline;
  }

//load random svg
//loadSvg(Math.floor(Math.random() * 2));

loadSvg(0);

//previous and next buttons
let i = 0;

nextButton.addEventListener("click", () => {
  i++;
  loadSvg(i);
})

previousButton.addEventListener("click", () => {
  i--;
  loadSvg(i);
})

//declare svg selectors after functions
const svgTarget = document.getElementById('svg');
const secondaryTarget = document.getElementById('c');

//toggle editor/select
toggleView.addEventListener("click", () => {
  editorWindow.style.display = editorWindow.style.display == "none" ? "block" : "none"; 
  svgSelectWindow.style.display = svgSelectWindow.style.display == "grid" ? "none" : helpWindow.style.display == "block" ? 'none' : "grid";
  helpWindow.style.display = "none";
})

//refresh page when home button is clicked
homeButton.addEventListener("click", () => {
  window.location.reload();
})

//toggle editor/help
helpButton.addEventListener("click", () => {
  editorWindow.style.display = editorWindow.style.display == "none" && svgSelectWindow.style.display == "none" ? "block" : "none";
  helpWindow.style.display = helpWindow.style.display == "block" ? "none" : "block";
  svgSelectWindow.style.display = "none";
})

//zoom features
let zoom = 0.9;
let zoomStep = 0.2;

zoomIn.addEventListener("click", () => {
  zoom += zoomStep;
  if (zoom > 1.3) {
    return;
  }
  svgTarget.style.transform = "scale(" + zoom + ")";
})

zoomOut.addEventListener("click", () => {
  if (zoom > zoomStep) {
    zoom -= zoomStep;
    if (zoom < 0.5) {
      return;
    }
    svgTarget.style.transform = "scale(" + zoom + ")";
  }
})

//color select
function primarySelect() {
    let defaultColor = "#000000";
    primaryColor.value = defaultColor;
    primaryColor.addEventListener("input", updateSVGFirst, false);
    //primaryColor.addEventListener("change", updateSVGAll, false);
    primaryColor.select();
  }

function secondarySelect() {
    let defaultColor = "#000000";
    secondaryColor.value = defaultColor;
    secondaryColor.addEventListener("input", updateSecondFirst, false);
    //secondaryColor.addEventListener("change", updateSecondAll, false);
    secondaryColor.select();
  }

function backgroundSelect() {
    let defaultColor = "#000000";
    backgroundColor.value = defaultColor;
    backgroundColor.addEventListener("input", updateBackgroundFirst, false);
    //backgroundColor.addEventListener("change", updateBackgroundAll, false);
    backgroundColor.select();
  }

function updateSVGFirst(event) {
    if (svgTarget) {
      svgTarget.style.fill = event.target.value;
    }
  }
  
  function updateSecondFirst(event) {
    if (secondaryTarget) {
      secondaryTarget.style.fill = event.target.value;
    }
  }
  
  function updateBackgroundFirst(event) {
    if (backgroundColor) {
      background.style.background = event.target.value;
    }
  }

//DOES NOT WORK - RETURNS NOT A FUNCTION
  // function updateSVGAll(event) {
//     svgTarget.forEach((g) => {
//       g.style.fill = event.target.value;
//     });
//   }

// function updateSecondAll(event) {
//   secondaryTarget.forEach((g) => {
//       g.style.fill = event.target.value;
//     });
//   }
  
// function updateBackgroundAll(event) {
//     background.forEach((b) => {
//       b.style.background = event.target.value;
//     });
//   }

