// const trueCol1Line1 = "a";
// const cell = document.getElementById("letterA");

// cell.addEventListener("submit", function () {
//   if (cell.value === "a") {
//     console.log("string");
//   } else {
//     console.log("não é string");
//   }
// });

const trueCol1Line1 = "b";
const cell = document.getElementById("col1line1");
const submit = document.getElementById("submit");

const trueValue = () => {
  if (cell.value === trueCol1Line1) {
    console.log("valores iguais");
  } else {
    console.log("tente de novo");
  }
};

submit.addEventListener("click", trueValue);
