const mainConten = document.getElementById("main-content");
const trashConten = document.getElementById("trash-content");
let noteInput = document.getElementById("lnote");
let titelInput = document.getElementById("ltitle");

let notes = [];
let titelNots = [];

let trashNoats = [];
let trashNoatsTitels = [];

let newtrashNoats = [];
let newtrashNoatsTitels = [];

function init() {
  return renderNodes();
}

function renderNodes() {
  mainConten.innerHTML = "";
  for (let notsindex = 0; notsindex < notes.length; notsindex++) {
    mainConten.innerHTML += getNoteTamplate(notsindex);
  }
}

function renderTrashNodes() {
  trashConten.innerHTML = "";
  for (let trashnotsindex = 0; trashnotsindex < trashNoats.length; trashnotsindex++) {
    trashConten.innerHTML += getTrashNoteTamplate(trashnotsindex);
  }
}

function getNoteTamplate(notsindex) {
  return `<p>+ ${titelNots[notsindex]} -> ${notes[notsindex]} <button onclick="removeItem(${notsindex})">x</button></p>`;
}

function getTrashNoteTamplate(trashnotsindex) {
  return `<p>+ ${trashNoatsTitels[trashnotsindex]} -> ${trashNoats[trashnotsindex]} <button onclick="removeTrashItem(${trashnotsindex})">x</button></p></p>`;
}

function addnote() {
  notes.push(noteInput.value);
  titelNots.push(titelInput.value);
  mainConten.innerHTML = "";

  renderNodes();
  noteInput.value = "";
}

function removeItem(notsindex) {
  let trashNoat = notes.splice(notsindex, 1);
  trashNoats.push(trashNoat);

  let trashNoatTitel = titelNots.splice(notsindex, 1);
  trashNoatsTitels.push(trashNoatTitel);

  renderNodes();
  renderTrashNodes();
}

function removeTrashItem(trashnotsindex) {
  let removTrashNoat = trashNoats.splice(trashnotsindex, 1);
  newtrashNoats.push(removTrashNoat);

  let removTrashNoatTitel = trashNoats.splice(trashnotsindex, 1);
  newtrashNoatsTitels.push(removTrashNoatTitel);

  renderTrashNodes();
}
