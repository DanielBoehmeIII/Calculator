document
  //TODO:
  //Add logic for scrolling when display gets full

  .querySelector(".calculator")
  .addEventListener("click", function (event) {
    const button = event.target;
    const display = document.getElementById("display");

    if (button.classList.contains("display-button")) {
      display.value += button.value;
      display.scrollLeft = display.scrollWidth;
    } else if (button.id.includes("clear-button")) {
      display.value = "";
    } else if (button.id.includes("delete-button")) {
      display.value = display.value.toString().slice(0, -1);
      display.scrollLeft = display.scrollWidth;
    } else if (button.id.includes("evaluate-button")) {
      const expressionArray = display.value.toString().split(/([+\-*/])/);
      for (let i = 0; i < expressionArray.length; i++) {
        if (expressionArray[i] === "*") {
          expressionArray[i - 1] =
            parseFloat(expressionArray[i - 1]) *
            parseFloat(expressionArray[i + 1]);
          expressionArray.splice(i, 2);
          i--;
        } else if (expressionArray[i] === "/") {
          expressionArray[i - 1] =
            parseFloat(expressionArray[i - 1]) /
            parseFloat(expressionArray[i + 1]);
          expressionArray.splice(i, 2);
          i--;
        }
      }
      for (let i = 0; i < expressionArray.length; i++) {
        if (expressionArray[i] === "+") {
          expressionArray[i - 1] =
            parseFloat(expressionArray[i - 1]) +
            parseFloat(expressionArray[i + 1]);
          expressionArray.splice(i, 2);
          i--;
        } else if (expressionArray[i] === "-") {
          expressionArray[i - 1] =
            parseFloat(expressionArray[i - 1]) -
            parseFloat(expressionArray[i + 1]);
          expressionArray.splice(i, 2);
          i--;
        }
      }
      display.value = expressionArray[0];
      display.scrollLeft = display.scrollWidth;
    }

    button.style.backgroundColor = "#09acff";

    setTimeout(() => {
      button.style.backgroundColor = "";
    }, 30);
  });
