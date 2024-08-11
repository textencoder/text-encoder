//color picker variables
const primaryColor = document.getElementById('primary-color');
const secondaryColor = document.getElementById('secondary-color');
const backgroundColor = document.getElementById('background-color');
//background color
const background = document.getElementById('editor-viewport');
//zoom buttons
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

const mobilePreviousButton = document.getElementById('mobile-prev');
const mobileNextButton = document.getElementById('mobile-next');

let i = 0;

//inline svg code array
let svgArray = [
  {
    name: "rodeo.svg",
    inline: `<?xml version="1.0" encoding="UTF-8"?>
                <svg class="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 624.36 116.5">
                    <g id="b" >
                        <path d="M587.86,23.69h-58.25c-14.15,0-27.47,5.51-37.49,15.52-.94.95-1.85,1.92-2.71,2.92l.04-.23c.72-4.56-.58-9.18-3.58-12.69-3-3.51-7.36-5.52-11.98-5.52h-52.64c-17.55,0-33.27,8.15-43.32,21.17l4.58-28.94c.64-3.97-.49-8.02-3.11-11.08-2.61-3.07-6.43-4.84-10.47-4.84h-19.55c-7.73,0-14.21,5.55-15.41,13.17l-2.14,13.48c-2.38-1.74-5.28-2.69-8.3-2.69h-32.25c-.39,0-.8,0-1.1.01-20.48.43-38.31,12.6-46.53,30.44-2.77-17.39-17.88-30.72-36.04-30.72h-58.25c-13.96,0-27.1,5.36-37.07,15.12-.29-3.41-1.63-6.68-3.9-9.34-3.14-3.68-7.71-5.78-12.54-5.78H27.31c-8.78,0-16.16,6.29-17.53,14.96L.19,99.2c-.68,4.26.53,8.58,3.33,11.85,2.8,3.28,6.88,5.16,11.19,5.16h18.08c8.78,0,16.14-6.29,17.52-14.96l5.93-37.45h33.57c3.03,0,5.92-.6,8.56-1.69-1.33,4.69-2.02,9.59-2.02,14.59,0,21.94,17.85,39.8,39.79,39.8h55.09c21.46,0,39.98-12.86,48.26-31.28,1.35,6.35,4.27,12.34,8.6,17.4,7.53,8.82,18.51,13.88,30.11,13.88h75.05c7.72,0,14.2-5.53,15.42-13.16l1.65-10.43c6.36,13.91,20.42,23.59,36.71,23.59h54.78c9.17,0,16.87-6.58,18.3-15.64l.79-5.01c.05-.32.09-.63.12-.95,6.61,12.82,19.98,21.6,35.37,21.6h55.09c29.16,0,52.88-23.73,52.88-52.89v-3.43c0-20.12-16.38-36.49-36.5-36.49ZM191.23,66.81c-.49,3.13-2.09,5.99-4.53,8.06-2.41,2.06-5.48,3.2-8.65,3.2h-29.91c-2.88,0-4.66-1.58-5.46-2.52s-2.08-2.94-1.63-5.79l1.22-7.67c1.22-7.72,7.77-13.32,15.59-13.32h1.82l-1.62,10.25h26.53c2.69,0,4.36,1.48,5.11,2.36s1.95,2.76,1.53,5.43ZM323.21,81.08h-23.56c-2.6,0-4.21-1.42-4.94-2.27-.72-.85-1.88-2.66-1.48-5.23.52-3.26,2.18-6.23,4.68-8.36,2.5-2.14,5.69-3.31,8.98-3.31h13.1c2.29,0,4.48-.47,6.46-1.31l-3.24,20.48ZM571.48,66.81c-.49,3.13-2.09,5.99-4.53,8.06-2.4,2.06-5.48,3.2-8.65,3.2h-29.91c-2.88,0-4.66-1.58-5.46-2.52s-2.08-2.94-1.63-5.79l1.22-7.67c1.22-7.72,7.78-13.32,15.59-13.32h1.82l-1.62,10.25h26.53c2.69,0,4.36,1.48,5.11,2.36.64.75,1.62,2.24,1.62,4.32,0,.36-.03.72-.09,1.11Z" />
                    </g>
                    <g class="c">
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
    name: "elyahu.svg",
    inline: `<?xml version="1.0" encoding="UTF-8"?>
    <svg class="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 486.26 323">
      <polygon points="330.44 193.63 342.33 186.8 342.33 323 381.33 300.2 381.33 107.73 330.44 137.11 330.44 193.63"/>
      <polygon points="342.33 101.89 330.33 108.82 330.33 0 291.33 22.8 291.33 111.19 324.25 130.29 381.33 97.34 381.33 0 342.33 22.8 342.33 101.89"/>
      <path d="M0,26.1v157.8l45,26.1,45-26.1v-65.1l-39,22.8v19.8l-12,6.9v-33.9l51-29.4V26.1L45,0,0,26.1ZM51,82.5l-12,6.9v-40.8l12-6.9v40.8Z"/>
      <polygon points="145 0 106 22.8 106 256.3 145 233.79 145 0"/>
      <polygon points="157 274.4 145 281.3 145 244.18 106 266.7 106 296.9 151 323 196 296.9 196 218 157 240.8 157 274.4"/>
      <polygon points="192.49 206.36 231.42 183.89 315.23 135.5 276.42 112.61 257 123.88 257 122.74 257 0 218 22.8 218 101.4 206 108.3 206 0 166.99 22.8 166.99 123.9 192.49 138.9 192.49 206.36"/>
      <polygon points="282.42 212 277.94 214.57 270.42 218.9 270.42 171.76 231.42 194.28 231.42 323 237.8 319.27 270.42 300.2 270.42 263.9 282.42 257 282.42 259.77 282.42 323 290.08 318.52 321.42 300.2 321.42 293.17 321.42 142.32 282.42 164.84 282.42 212"/>
      <polygon points="447.26 135.8 447.26 274.4 435.26 281.3 435.26 113 396.26 135.8 396.26 296.9 441.26 323 486.26 296.9 486.26 113 447.26 135.8"/>
    </svg>`,
  },
  {
    name: "mia.svg",
    inline: `<?xml version="1.0" encoding="UTF-8"?>
    <svg class="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1607.18 2253.54">
      <path d="M1199.73,1296.15c-5.37-16.34-28.11-86.58-39.32-172.9-7.67-59.06-3.55-76.5,8.12-86.75,23.09-20.31,66.57-4.35,76.14-.63-4.65-17.7-12.77-26.19-18.72-30.58-36.84-27.22-111.82,12.84-139.19,27.46-30.31,16.19-31.61,22.34-48.06,26.22-44.04,10.36-89.14-20.9-121.09-49.94,9.04,29.04,20.55,49.65,29.34,63.04,8.94,13.63,13.28,17.09,19.97,29.34,12.8,23.44,15.56,44.97,17.48,61.79,9.46,83.06,13.15,124.7,11.86,157.29-1.93,48.51-9.39,117.62-34.33,198.48,7.3-19.25,20.64-47.53,44.94-76.14,22.02-25.93,45.06-42.75,61.79-53.06-4.03-24.04-7.1-53.12-6.87-86.13.24-33.06,3.73-62.13,8.12-86.14,12.84,15.32,29.19,38.34,41.82,69.29,16.74,41.03,19.46,77.71,19.35,100.49,11.99,1.84,29.84,6.3,48.06,18.1,40.11,25.98,51.58,67.88,54.3,79.27,1.47-17.27,2.48-43.24-1.25-74.28-5.07-42.18-14.94-60.96-32.46-114.22ZM1084.59,1179.25c-2.3,1.68-6.06,3.99-11.16,5.46-5.29,1.52-9.84,1.52-12.73,1.3-2.48-7.07-5.35-17.96-5.19-31.43.2-17.64,5.49-31.21,9.09-38.7,4.25,5.23,9.27,12.58,13.25,22.12,7.11,17.02,7.33,32.42,6.74,41.25Z"/>
      <path d="M896.14,1050.23c10.93,16.49,26.13,42,39.17,75.25,32.18,82.05,28.42,153.18,24.49,227.47-4.76,90.01-22.71,153.96-28.09,172.27-14.19,48.35-31.44,87.9-46.19,117.34-3.53-17.99-9.51-40.14-19.97-64.29-8.9-20.55-18.91-37.62-28.09-51.18,15.7-39.17,34.41-98.82,38.7-173.52,4.03-70.15-6.11-128.26-16.23-167.9,7.19-14.3,14.45-31.19,20.6-50.56,10.29-32.41,14.28-61.68,15.6-84.89Z"/>
      <path d="M826.27,1164.58c12.15,38.09,23.2,89.43,22.29,150.29-1.42,94.76-31.17,166.6-49.94,204.1,1.13-17.47.81-51.31-16.8-87.78-9.86-20.41-22.1-35.35-31.87-45.38,7.5-20.96,28.21-75.3,17.48-127.18-5.21-25.18-14.3-45.36-22.47-59.92-5.46,6.59-11.37,13.34-17.76,20.19-9.33,10-18.55,18.99-27.44,27.04-1.64-10.41-4.04-21.91-7.55-34.2-2.51-8.79-5.28-16.91-8.13-24.33-11.17,14.66-22.85,32.52-33.32,53.76-25.77,52.28-32.47,101.27-33.9,134.14-10.56,5.91-31.9,19.78-47.48,46.23-21.3,36.18-17.66,71.87-16.06,83.08-17.11-41.91-21.17-76.36-22.02-98.66-2.35-62.12,36.69-202.32,84.83-259.66,5.29-6.31,12.27-14.1,18.77-22.91,1.07-1.45,2.13-2.93,3.16-4.44.02-.02.03-.03.04-.05,6.67-9.71,12.41-20.48,14.63-31.77.86-5.99.7-12.46-1.14-19.17-5.14-18.81-20.35-28.3-25.43-31.46-32.71-20.4-71.92-2.63-76.15-.63,4.65-17.7,12.77-26.19,18.72-30.58,36.84-27.22,111.82,12.84,139.19,27.46,30.31,16.19,31.62,22.34,48.06,26.22,44.04,10.36,89.14-20.9,121.09-49.94-9.03,29.04-20.55,49.65-29.34,63.04-8.64,13.17-14.86,17.8-19.97,29.34-10.01,22.62-6.39,46.26-1.5,63.17Z"/>
    </svg>`,
  },
  
]

//default color variables
let defaultBlack = "#000000";
let defaultWhite = "#ffffff";

//wait for editor to load
window.addEventListener("load", primarySelect, false);
window.addEventListener("load", secondarySelect, false);
window.addEventListener("load", backgroundSelect, false);

//mutation observer

const targetNode = inlineContainer; // Or any other parent element where SVGs might be injected
const config = { childList: true, subtree: true }; // Observe child list and subtrees

const callback = function(mutationsList, observer) {
  for(const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      for(const node of mutation.addedNodes) {
        if (node.nodeName === 'svg') {
          // Handle the newly injected SVG element here
          console.log('New SVG element:', node);
          // logic to process the SVG
        }
      }
    }
  }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

//insert inline svg
function loadSvg(index) {
     fileNameContainer.innerText = svgArray[index].name;
     inlineContainer.innerHTML = svgArray[index].inline;
     console.log('SVG LOADED');
  }

//load random svg
//loadSvg(Math.floor(Math.random() * 2));

//load svg from array on load
loadSvg(i);

//reset color picker and fill values
const resetColors = () => {
  primaryColor.value = defaultBlack;
  svgTarget.style.fill = defaultBlack;
  secondaryColor.value = defaultWhite;
  secondaryTarget.style.fill = defaultWhite;
  background.style.background = defaultWhite;
  backgroundColor.value = defaultWhite;
}

//previous and next buttons
// let i = 0;

nextButton.addEventListener("click", () => {
  if (i < svgArray.length - 1) {
  i++;
  loadSvg(i);
  console.log(i);
  } else {
    loadSvg(0);
    i = 0;
    console.log(i);
  }
  resetColors();
})

previousButton.addEventListener("click", () => {
  if (i > 0) {
  i--;
  loadSvg(i);
  console.log(i);
  } else {
    loadSvg(svgArray.length - 1);
    i = svgArray.length - 1;
    console.log(i);
  }
  resetColors();
})

mobileNextButton.addEventListener("click", () => {
  if (i < svgArray.length - 1) {
  i++;
  loadSvg(i);
  console.log(i);
  } else {
    loadSvg(0);
    i = 0;
    console.log(i);
  }
  resetColors();
})

mobilePreviousButton.addEventListener("click", () => {
  if (i > 0) {
  i--;
  loadSvg(i);
  console.log(i);
  } else {
    loadSvg(svgArray.length - 1);
    i = svgArray.length - 1;
    console.log(i);
  }
  resetColors();
})

//declare svg selectors after functions
//const svgTarget = document.getElementById('a');
// const secondaryTarget = document.getElementById('c');

//alternate declarations
let svgTarget = document.querySelectorAll('.a')[i];
let secondaryTarget = document.querySelectorAll('.c')[i];

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

//zoom features for inline container
let zoom = 0.9;
let zoomStep = 0.2;

zoomIn.addEventListener("click", () => {
  if (zoom >= 1.2) {
    return;
  }
  zoom += zoomStep;
  
  inlineContainer.style.transform = "scale(" + zoom + ")";

  console.log(zoom)
})

zoomOut.addEventListener("click", () => {
  if (zoom <= 0.5) {
    return;
  }

  if (zoom > zoomStep) {
    zoom -= zoomStep; 
    inlineContainer.style.transform = "scale(" + zoom + ")";
  }

  console.log(zoom)
})

//color select
function primarySelect() {
    //let defaultColor = "#000000";
    primaryColor.value = defaultBlack;
    primaryColor.addEventListener("input", updateSVGFirst, false);
    //primaryColor.addEventListener("change", updateSVGAll, false);
    primaryColor.select();
    console.log("primary select activated");
  }

function secondarySelect() {
    //let defaultColor = "#000000";
    secondaryColor.value = defaultWhite;
    secondaryColor.addEventListener("input", updateSecondFirst, false);
    //secondaryColor.addEventListener("change", updateSecondAll, false);
    secondaryColor.select();
    console.log("secondary select activated");
  }

function backgroundSelect() {
    //let defaultColor = "#000000";
    backgroundColor.value = defaultWhite;
    backgroundColor.addEventListener("input", updateBackgroundFirst, false);
    //backgroundColor.addEventListener("change", updateBackgroundAll, false);
    backgroundColor.select();
    console.log("background select activated");
  }

function updateSVGFirst(event) {
    if (svgTarget) {
      svgTarget.style.fill = event.target.value;
      console.log('change detected - primary color')
    }
  }
  
  function updateSecondFirst(event) {
    if (secondaryTarget) {
      secondaryTarget.style.fill = event.target.value;
      console.log('change detected - secondary color')
    }
  }
  
  function updateBackgroundFirst(event) {
    if (background) {
      background.style.background = event.target.value;
      console.log('change detected - background color')
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

//svgArray iteration
// function printSvg() {
//   svgArray.forEach(element => {
//     console.log((element.inline).includes('class="a"'));
//   })
// }

//test functions

function printSvg() {
  svgArray.forEach(element => {
    (element.inline).includes('class="a"') ?
    console.log(element.name) : 
    console.log('error');
  })
}

function printTarget() {
  console.log(svgTarget)
}

function printLength() {
  console.log(svgArray)
}

function printInline() {
  console.log(svgArray[0].inline)
}

//research addEventListener "events"
//event delegation