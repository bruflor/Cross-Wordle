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
    // direction: "vert",
    // isVisible: true,
    initialTop: 0,
    initialLeft: 4,
  },
];
const createInput = (id, value = "") => {
  const container = document.getElementById("crosswordle_container");

  const newInput = document.createElement("input");
  newInput.setAttribute("class", "charInput");
  newInput.setAttribute("maxlength", "1");
  newInput.setAttribute("id", id);
  newInput.setAttribute("value", value);
  newInput.style.left = "50%";
  newInput.style.top = "15%";

  container.appendChild(newInput);
};

// const createWordInputGroup = ({ word, initialTop, initialLeft }) => {
//   for (let i = 0; i < word.length; i++) {
//     console.log(i);
//     createInput(i, word[i], `${initialTop * 4}%`, `${initialLeft * 4}%`);
//   }
// };

// words.forEach((word) => {
//   createWordInputGroup(word);
// });

words.forEach(({ word }) => {
  for (let i = 0; i < word.length; i++) {
    createInput(i, word[i]);
  }
});
