const mainConten = document.getElementById("main-content");
const trashConten = document.getElementById("trash-content");
let noteInput = document.getElementById("lnote");
let titelInput = document.getElementById("ltitle");

let notes = ["Einkaufen"];
let trashNoats = [];
let newtrashNoats = [];

function init() {
  getFromLocaleStorage();
  getFromLocaleStorageTrashNotates();
  renderNodes();
  renderTrashNodes();
}

function renderNodes() {
  mainConten.innerHTML = "";
  for (let notsindex = 0; notsindex < notes.length; notsindex++) {
    mainConten.innerHTML += getNoteTamplate(notsindex);
  }
}

function renderTrashNodes() {
  trashConten.innerHTML = "";
  for (
    let trashnotsindex = 0;
    trashnotsindex < trashNoats.length;
    trashnotsindex++
  ) {
    trashConten.innerHTML += getTrashNoteTamplate(trashnotsindex);
  }
}

function getNoteTamplate(notsindex) {
  return `<p>+ ${notes[notsindex]} <button onclick="removeItem(${notsindex})">x</button></p>`;
}

function getTrashNoteTamplate(trashnotsindex) {
  return `<p>+ ${trashNoats[trashnotsindex]} <button onclick="removeTrashItem(${trashnotsindex})">x</button></p></p>`;
}

function addnote() {
  notes.push(noteInput.value);
  mainConten.innerHTML = "";
  saveToLocaleStorage();
  renderNodes();
  noteInput.value = "";
}

function removeItem(notsindex) {
  let trashNoat = notes.splice(notsindex, 1);
  trashNoats.push(trashNoat);
  saveToLocaleStorage();
  saveToLocaleStorageTrashNoats();
  renderNodes();
  renderTrashNodes();
}

function removeTrashItem(trashnotsindex) {
  let removTrashNoat = trashNoats.splice(trashnotsindex, 1);
  newtrashNoats.push(removTrashNoat);
  saveToLocaleStorage();
  saveToLocaleStorageTrashNoats();
  renderTrashNodes();
}

// In Local Storage Speichern
function saveToLocaleStorage() {
  localStorage.setItem("nots", JSON.stringify(notes));
}

function saveToLocaleStorageTrashNoats() {
  localStorage.setItem("trashNoats",JSON.stringify(trashNoats)
  );
}

// Von Local Storage Laden
function getFromLocaleStorage() {
  let newnotes = JSON.parse(localStorage.getItem("nots"));
  notes = newnotes;
  if (newnotes == "") {
    notes = newnotes;
  } else {
    newnotes = notes;
  }
}

function getFromLocaleStorageTrashNotates() {
  let newtrashNoats = JSON.parse(localStorage.getItem("trashNoats"));
  trashNoats = newtrashNoats;
  if (newtrashNoats == "") {
     newtrashNoats = trashNoats;
  } else {
    trashNoats = newtrashNoats;
  }
}
