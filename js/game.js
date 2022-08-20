const cont = document.getElementById("container");
const form = document.querySelector("form");
const btnSize = document.getElementById("size");
const circle = document.getElementById("circle");
const cross = document.getElementById("cross");

let row = document.getElementById("row");
let column = document.getElementById("column");
let radioButton = document.querySelectorAll('input[name="type"]');
let div1 = document.createElement("div");
div1.id = "sizeDiv";
let select;

btnSize.addEventListener("click", (e) => {
  let btnDelet = document.querySelectorAll(".btnDelete");

  for (let radio of radioButton) {
    console.log(radio.chached);
    if (radio.chached) {
      select = radio.value;
      console.log(select);
    }
  }
  if (btnDelet.length > 0) {
    for (const elem of btnDelet) {
      elem.remove();
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
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

const handRed = (data) => {
  let redUser = document.querySelectorAll(".red");
  for (let i = 0; i < redUser.length; i++) {
    if (data == redUser[i].id) {
      return false;
    }
  }
  return true;
};

const handBlue = (data) => {
  let kompBlue = document.querySelectorAll(".blue");
  for (let i = 0; i < kompBlue.length; i++) {
    if (data == kompBlue[i].id) {
      return false;
    }
  }
  return true;
};

div1?.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.localName === "button") {
    let i = e.target.attributes.id.nodeValue;
    let chanDiv = document.getElementById(i);
    chanDiv.classList.add("red");
  }
  //-------------------------------------------------------
  let kompPas = document.querySelectorAll(".btnSize");

  // let kompBlueSelect = document.querySelectorAll(".blue");
  for (const select of kompPas) {
    if (handBlue(select.id) && handRed(select.id)) {
      console.log(select);
      select.classList.add("blue");
      break;
    }
  }
});

circle.addEventListener("change", () => {
  console.log(circle.value);
  select = "circle";
});

cross.addEventListener("change", (e) => {
  console.log(e);
  select = "cross";
});
