const cont = document.getElementById("container");
const newGame = document.getElementById("size");

let div1 = document.createElement("div");
div1.id = "sizeDiv";
let userSelect;
let kompSelect;
let sizeGame;

newGame.addEventListener("click", (e) => {
  let btnDelet = document.querySelectorAll(".btnDelete");
  let radioButton = document.querySelectorAll('input[name="type"]');

  for (let radio of radioButton) {
    if (!radio.checked) {
      kompSelect = radio.value;
    } else {
      userSelect = radio.value;
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
      if (i % 2 === 1 && j % 2 === 1) {
        but.classList.add(`${kompSelect}`);
      }
      div1.appendChild(but);
    }

    div1.appendChild(document.createElement("p"));
    cont.appendChild(div1);
  }
});

const handRed = (data) => {
  let redUser = document.querySelectorAll(`.${userSelect}`);

  for (let i = 0; i < redUser.length; i++) {
    if (data == redUser[i].id) {
      return false;
    }
  }
  return true;
};

const handBlue = (data) => {
  const kompBlue = document.querySelectorAll(`.${kompSelect}`);

  for (let i = 0; i < kompBlue.length; i++) {
    if (data == kompBlue[i].id) {
      return false;
    }
  }
  return true;
};
const selectFound = (i, user) => {
  let count = 0;
  for (const item of user) {
    for (let j = 0; j < 3; j++) {
      console.log(item.id === `${i}-${j}`);
      if (item.id === `${i}-${j}`) {
        count++;
      }
    }
  }
  if (count >= 2) {
    for (const item of user) {
      for (let j = 0; j < 3; j++) {
        if (item.id !== `${i}-${j}`) {
          if (handRed(`${i}-${j}`)) {
            const btnAddClass = document.getElementById(`${i}-${j}`);
            console.log(btnAddClass.id);
            btnAddClass.classList.add(`${kompSelect}`);
            return;
          }
        }
      }
    }
  } else {
    for (const select of sizeGame) {
      if (handBlue(select.id) && handRed(select.id)) {
        select.classList.add(`${kompSelect}`);
        return;
      }
    }
  }
};
const controlWhoWin = () => {
  const kompBlue = document.querySelectorAll(`.${kompSelect}`);
  let redUser = document.querySelectorAll(`.${userSelect}`);
  for (const itemId of redUser) {
    let row = itemId.id.charAt(0);
    let col = itemId.id.charAt(2);

    selectFound(row, redUser);
    return;
  }
};
div1?.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.localName === "button") {
    let i = e.target.attributes.id.nodeValue;
    let chanDiv = document.getElementById(i);
    chanDiv.classList.add(`${userSelect}`);
  }

  sizeGame = document.querySelectorAll(".btnSize");

  controlWhoWin();
});

circle.addEventListener("change", () => {
  select = "circle";
});

cross.addEventListener("change", (e) => {
  select = "cross";
});
