// document.addEventListener("DOMContentLoaded", function () {
const cont = document.getElementById("container");
const form = document.querySelector("form");
const btnSize = document.getElementById("size");
let row = document.getElementById("row");
let column = document.getElementById("column");
let div1 = document.createElement("div");
div1.id = "sizeDiv";

btnSize.addEventListener("click", (e) => {
  let btnDelet = document.querySelectorAll(".btnDelete");

  if (btnDelet.length > 0) {
    for (const elem of btnDelet) {
      elem.remove();
    }
  }

  for (let i = 0; i < row.value; i++) {
    for (let j = 0; j < column.value; j++) {
      let but = document.createElement("button");
      but.id = `${i}-${j}`;
      but.classList.add("btnSize");
      but.classList.add("btnDelete");
      div1.appendChild(but);
    }

    div1.appendChild(document.createElement("p"));
    cont.appendChild(div1);
  }
});

div1?.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.localName === "button") {
    let i = e.target.attributes.id.nodeValue;
    let chanDiv = document.getElementById(i);
    chanDiv.classList.add("red");
  }
});
