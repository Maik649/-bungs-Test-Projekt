
let notes=[];
function init() {
  return renderNodes();
}

function renderNodes() {
  const mainConten = document.getElementById("main-content");
  mainConten.innerHTML="";
  for (let notsindex = 0; notsindex < notes.length; notsindex++) {
    mainConten.innerHTML += getNoteTamplate(notsindex);
  }
  
}
function getNoteTamplate(notsindex) {
  return `<p>+ ${notes[notsindex]} <button onclick="removeItem(${notsindex})">x</button></p>`;
}
function addnote() {
  let noteInput = document.getElementById("lvorname");
  let noteInputref = noteInput.value;

  notes.push(noteInputref);
  renderNodes();
  noteInput.value ="";
}

function removeItem(notsindex) {
  notes.splice(notsindex, 1);
  renderNodes();
}