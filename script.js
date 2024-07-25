const svgTarget = document.getElementById('svg');
const primaryColor = document.getElementById('primary-color');
const secondaryColor = document.getElementById('secondary-color');
const backgroundColor = document.getElementById('background-color');
const background = document.getElementById('editor-viewport');
const secondaryTarget = document.getElementById('c');
const zoomIn = document.getElementById('zoom-in');
const zoomOut = document.getElementById('zoom-out');
const toggleView = document.getElementById('toggle-view');
const editorWindow = document.getElementById('editor-window');
const svgSelectWindow = document.getElementById('svg-select');
const svgSelectDivTitle = document.getElementById('svg-select-div-title');
const helpWindow = document.getElementById('help-window');
const helpButton = document.getElementById('help-button');
const homeButton = document.getElementById('textencoder');

//wait for editor to load
window.addEventListener("load", primarySelect, false);
window.addEventListener("load", secondarySelect, false);
window.addEventListener("load", backgroundSelect, false);

//toggle editor/select
toggleView.addEventListener("click", () => {
  editorWindow.style.display = editorWindow.style.display == "none" ? "block" : "none"; 
  svgSelectWindow.style.display = svgSelectWindow.style.display == "grid" ? "none" : helpWindow.style.display == "block" ? 'none' : "grid";
  helpWindow.style.display = "none";
})

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

//color select
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