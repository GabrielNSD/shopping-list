var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let deleteBtns = document.getElementsByClassName("delete");
let lis = document.getElementsByTagName("li");

console.log(deleteBtns);

//add an Event Listener to each li
function refreshEventListeners() {
  for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", addLine);
  }
}

function registerDeleteListeners() {
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", deleteParent);
  }
}

function addLine(event) {
  var eventText = event.target.childNodes[0]; //saves the text contained on triggered li by eventListener
  //console.log(lis);
  for (var i = 0; i < lis.length; i++) {
    if (lis[i].childNodes[0] === eventText) {
      lis[i].classList.toggle("done");
    }
  }
}

function deleteParent(event) {
  let eventParent = event.target.parentElement;
  for (let i = 0; i < lis.length; i++) {
    if (lis[i] === eventParent) {
      lis[i].remove();
    }
  }
}

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  var btn = document.createElement("button");
  btn.innerHTML = "Delete";
  btn.classList.add("delete");
  li.appendChild(btn);
  ul.appendChild(li);
  input.value = "";
  refreshEventListeners();
  registerDeleteListeners();
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

refreshEventListeners();
registerDeleteListeners();
