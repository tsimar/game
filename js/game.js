const cont = document.getElementById("container");
const form = document.querySelector("form");
// let but = document.createElement("button");
const btnSize = document.getElementById("size");
let row = document.getElementById("row");
let column = document.getElementById("column");

btnSize.addEventListener("click", (e) => {
  let divDelet = document.getElementById("sizeDiv");

  if (divDelet !== null) {
    cont.removeChild(divDelet);
  }

  let div = document.createElement("div");
  div.id = "sizeDiv";
  for (let i = 0; i < row.value; i++) {
    for (let j = 0; j < column.value; j++) {
      let but = document.createElement("button");
      but.id = `${i}-${j}`;
      but.classList.add("btnSize");
      div.appendChild(but);
    }

    div.appendChild(document.createElement("p"));
  }
  cont.appendChild(div);
});
let divYard = document.getElementById("sizeDiv");
// document.addEventListener('DOMContentLoaded',function() {
// let divYard = document.getElementById("sizeDiv");
//   divYard?.addEventListener("click", (e) => {
//   console.log(e)
// })
// })

divYard?.addEventListener('click', (e) => {
  if (e.target && e.target.id == '0-1') {
    console.log("dddddddddddddddd");
  }
})
function swapper() {
  toggleClass(document.getElementById("overlay"), "open");
}

if (divYard) {
  divYard.click( (e) => {
    console.log(e);
  });
}
// let divYard = document.getElementById("sizeDiv");
