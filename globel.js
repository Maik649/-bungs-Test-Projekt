const mainConten = document.getElementById("main-content");
let notes = [];
let noteInput = document.getElementById("lvorname");

function init() {
  return renderNodes();
}

function renderNodes() {
  mainConten.innerHTML = "";
  for (let notsindex = 0; notsindex < notes.length; notsindex++) {
    mainConten.innerHTML += getNoteTamplate(notsindex);
  }
}

function getNoteTamplate(notsindex) {
  return `<p>+ ${notes[notsindex]} <button onclick="removeItem(${notsindex})">x</button></p>`;
}

function addnote() {
  notes.push(noteInput.value);
  mainConten.innerHTML = "";
  renderNodes();
  noteInput.value = "";
}

function removeItem(notsindex) {
  notes.splice(notsindex, 1);
  renderNodes();
}
