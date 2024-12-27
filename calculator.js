document
  //TODO:
  //Add logic for scrolling when display gets full

  .querySelector(".calculator")
  .addEventListener("click", function (event) {
    const button = event.target;
    const display = document.getElementById("display");

    if (button.classList.contains("display-button")) {
      display.value += button.value;
    } else if (button.id.includes("clear-button")) {
      display.value = "";
    } else if (button.id.includes("delete-button")) {
      display.value = display.value.toString().slice(0, -1);
    } else {
      display.value = eval(display.value);
    }

    button.style.backgroundColor = "#09acff";

    setTimeout(() => {
      button.style.backgroundColor = "";
    }, 30);
  });
