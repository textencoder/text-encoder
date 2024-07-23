const svgTarget = document.getElementById('svg');
const primaryColor = document.getElementById('primary-color');
const secondaryColor = document.getElementById('secondary-color');
const backgroundColor = document.getElementById('background-color');
const background = document.getElementById('editor-viewport');
const secondaryTarget = document.getElementById('second');
const zoomIn = document.getElementById('zoom-in');
const zoomOut = document.getElementById('zoom-out');

window.addEventListener("load", primarySelect, false);
window.addEventListener("load", secondarySelect, false);
window.addEventListener("load", backgroundSelect, false);


let zoom = 0.9;
let zoomStep = 0.2;

zoomIn.addEventListener("click", () => {
  zoom += zoomStep;
  if (zoom > 1.3) {
    return;
  }
  svgTarget.style.transform = "scale(" + zoom + ")";
  console.log(zoom);
})

zoomOut.addEventListener("click", () => {
  if (zoom > zoomStep) {
    zoom -= zoomStep;
    if (zoom < 0.5) {
      return;
    }
    svgTarget.style.transform = "scale(" + zoom + ")";
    console.log(zoom);
  }
})
  
function primarySelect() {
    let defaultColor = "#000000";
    primaryColor.value = defaultColor;
    primaryColor.addEventListener("input", updateSVGFirst, false);
    primaryColor.addEventListener("change", updateSVGAll, false);
    primaryColor.select();
  }

function secondarySelect() {
    let defaultColor = "#000000";
    secondaryColor.value = defaultColor;
    secondaryColor.addEventListener("input", updateSecondFirst, false);
    secondaryColor.addEventListener("change", updateSecondAll, false);
    secondaryColor.select();
  }

function backgroundSelect() {
    let defaultColor = "#000000";
    backgroundColor.value = defaultColor;
    backgroundColor.addEventListener("input", updateBackgroundFirst, false);
    backgroundColor.addEventListener("change", updateBackgroundAll, false);
    backgroundColor.select();
  }
  
function updateSVGFirst(event) {
    if (svgTarget) {
      svgTarget.style.fill = event.target.value;
    }
  }
  
function updateSVGAll(event) {
    svgTarget.forEach((g) => {
      g.style.fill = event.target.value;
    });
  }

  function updateSecondFirst(event) {
    if (secondaryTarget) {
      secondaryTarget.style.fill = event.target.value;
    }
  }
  
function updateSecondAll(event) {
  secondaryTarget.forEach((g) => {
      g.style.fill = event.target.value;
    });
  }

  function updateBackgroundFirst(event) {
    if (backgroundColor) {
      background.style.background = event.target.value;
    }
  }
  
function updateBackgroundAll(event) {
    background.forEach((b) => {
      b.style.background = event.target.value;
    });
  }