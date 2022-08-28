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

function forEachCircleOrCross(data, circleOrCross) {
  for (let i = 0; i < circleOrCross.length; i++) {
    if (data == circleOrCross[i].id) {
      return false;
    }
  }
  return true;
}

const handRed = (data) => {
  let redUser = document.querySelectorAll(`.${userSelect}`);
  return forEachCircleOrCross(data, redUser);
};

const handBlue = (data) => {
  const kompBlue = document.querySelectorAll(`.${kompSelect}`);
  return forEachCircleOrCross(data, kompBlue);
};

function countInLine(i, user) {
  let count = 0;
  for (const item of user) {
    for (let j = 0; j < 3; j++) {
      if (item.id === `${i}-${j}`) {
        count++;
      }
    }
  }
  return count;
}
function pushRowsSelectKomp(i, user) {
  for (const item of user) {
    for (let j = 0; j < 3; j++) {
      if (item.id !== `${i}-${j}`) {
        if (handRed(`${i}-${j}`)) {
          const btnAddClass = document.getElementById(`${i}-${j}`);
          btnAddClass.classList.add(`${kompSelect}`);
          return;
        }
      }
    }
  }
}

function pushColumsSelectKomp(j, user) {
  for (const item of user) {
    for (let i = 0; i < 3; i++) {
      if (item.id !== `${i}-${j}`) {
        if (handRed(`${i}-${j}`)) {
          const btnAddClass = document.getElementById(`${i}-${j}`);
          btnAddClass.classList.add(`${kompSelect}`);
          return;
        }
      }
    }
  }
}

function iteratorSizeGame(j, i) {
  sizeGame.forEach(function (item, index) {
    if (item.id === `${j}-${i}`) {
      sizeGame[index].classList.add(`${kompSelect}`);
      return;
    }
  });
}

const selectFound = () => {
  for (let j = 0; j < 3; j += 2) {
    for (let i = 0; i < 3; i += 2) {
      if (handRed(`${j}-${i}`) && handBlue(`${j}-${i}`)) {
        iteratorSizeGame(j, i);
        return;
      }
    }
  }

  for (const select of sizeGame) {
    if (handBlue(select.id) && handRed(select.id)) {
      select.classList.add(`${kompSelect}`);
      return;
    }
  }
};
const handleWenPutForKomp = () => {
  let redUser = document.querySelectorAll(`.${userSelect}`);
  const kompBlue = document.querySelectorAll(`.${kompSelect}`);
  let counRow = 0;
  let counCol = 0;
  let cols = -1;
  let rows = -1;
  let countFreePoints = true;

  for (const itemId of redUser) {
    if (cols !== itemId.id.charAt(0)) {
      cols = itemId.id.charAt(0);
      for (let i = 0; i < redUser.length; i++) {
        for (let j = 0; j < 3; j++) {
          if (redUser[i].id === `${cols}-${j}`) {
            counCol++;
          }
        }
      }
    }

    if (rows !== itemId.id.charAt(2)) {
      rows = itemId.id.charAt(2);
      for (let i = 0; i < redUser.length; i++) {
        for (let j = 0; j < 3; j++) {
          if (redUser[i].id === `${j}-${rows}`) {
            counRow++;
          }
        }
      }
    }

    if (counCol >= 2) {
      for (let i = 0; i < kompBlue.length; i++) {
        for (let j = 0; j < 3; j++) {
          if (kompBlue[i].id === `${cols}-${j}`) {
            countFreePoints = false;
          }
        }
      }
      break;
    } else if (counRow >= 2) {
      for (let i = 0; i < kompBlue.length; i++) {
        for (let j = 0; j < 3; j++) {
          if (kompBlue[i].id === `${j}-${rows}`) {
            countFreePoints = false;
          }
        }
      }
      break;
    }
  }

  if (counCol >= 2 && countFreePoints) {
    pushRowsSelectKomp(cols, redUser);
  } else if (counRow >= 2 && countFreePoints) {
    pushColumsSelectKomp(rows, redUser);
  } else {
    selectFound();
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

  handleWenPutForKomp();
});

circle.addEventListener("change", () => {
  select = "circle";
});

cross.addEventListener("change", (e) => {
  select = "cross";
});
