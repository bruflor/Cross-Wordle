// const trueCol1Line1 = "b";
// const cell = document.getElementById("col1line1");
// const submit = document.getElementById("submit");

// const trueValue = () => {
//   if (cell.value === trueCol1Line1) {
//     console.log("valores iguais");
//   } else {
//     console.log("tente de novo");
//   }
// };

// submit.addEventListener("click", trueValue);
const words = [
  {
    word: "florianópolis",
    direction: "vert",
    isVisible: true,
    initialTop: 0,
    initialLeft: 4,
  },
  {
    word: "maceió",
    direction: "horiz",
    initialTop: 4,
    initialLeft: 0,
    isVisible: false,
  },
  {
    word: "fortaleza",
    direction: "horiz",
    initialTop: 0,
    initialLeft: 4,
    isVisible: false,
  },
  {
    word: "palmas",
    direction: "horiz",
    initialTop: 1,
    initialLeft: 2,
    isVisible: false,
  },
  {
    word: "boa-vista",
    direction: "horiz",
    initialTop: 2,
    initialLeft: 3,
    isVisible: false,
  },
  {
    word: "recife",
    direction: "horiz",
    initialTop: 3,
    initialLeft: 4,
    isVisible: false,
  },
  {
    word: "cuiabá",
    direction: "horiz",
    initialTop: 5,
    initialLeft: 1,
    isVisible: false,
  },
  {
    word: "manaus",
    direction: "horiz",
    initialTop: 6,
    initialLeft: 2,
    isVisible: false,
  },
  {
    word: "vitória",
    direction: "horiz",
    initialTop: 7,
    initialLeft: 1,
    isVisible: false,
  },
  {
    word: "macapa",
    direction: "horiz",
    initialTop: 8,
    initialLeft: 0,
    isVisible: false,
  },
  {
    word: "goiania",
    direction: "horiz",
    initialTop: 9,
    initialLeft: 3,
    isVisible: false,
  },
  {
    word: "belém",
    direction: "horiz",
    initialTop: 10,
    initialLeft: 2,
    isVisible: false,
  },
  {
    word: "curitiba",
    direction: "horiz",
    initialTop: 11,
    initialLeft: 1,
    isVisible: false,
  },
  {
    word: "salvador",
    direction: "horiz",
    initialTop: 12,
    initialLeft: 4,
    isVisible: false,
  },
];

const createInput = (
  id,
  value = "",
  direction = "horiz",
  indexPosition,
  initialTop,
  initialLeft,
  isVisible,
  hiddenIndex
) => {
  const container = document.getElementById("crosswordle_container");

  const newInput = document.createElement("input");
  newInput.setAttribute("class", "charInput");
  newInput.setAttribute("maxlength", "1");
  newInput.setAttribute("id", id);

  if (isVisible) {
    newInput.setAttribute("value", value);
    newInput.setAttribute("disabled", "disabled");
    newInput.classList.add("hiddenBorder");
  }

  setWordDirection(direction, newInput, indexPosition, initialTop, initialLeft); // 4% is the amount to move one tile

  container.appendChild(newInput);
};

const setWordDirection = (
  direction,
  element,
  indexPosition,
  topInitialPosition = 0,
  leftInitialPosition = 0
) => {
  //define if word will goes in horizontal or vertical
  const initialVerticalPosition = topInitialPosition;
  const initialHorizontalPosition = leftInitialPosition;

  if (direction === "horiz") {
    element.style.top = topInitialPosition;
    element.style.left = `calc(${initialHorizontalPosition} + ${
      32 * indexPosition
    }px)`;
  }

  if (direction === "vert") {
    element.style.top = `calc(${initialVerticalPosition} + ${
      32 * indexPosition
    }px)`;
    element.style.left = leftInitialPosition;
  }
};

const createWordInputGroup = ({
  word,
  direction,
  isVisible = false,
  initialTop,
  initialLeft,
}) => {
  for (let i = 0; i < word.length; i++) {
    createInput(
      i,
      word[i],
      direction,
      i,
      `${initialTop * 5}%`,
      `${initialLeft * 5}%`,
      isVisible
    );
  }
};

words.forEach((word) => {
  createWordInputGroup(word);
});

//trigger de botão
const trueValue = () => {
  if (1 === 1) {
    console.log("banana");
  }
};

const submit = document.getElementById("checkButton");
submit.addEventListener("click", trueValue);
