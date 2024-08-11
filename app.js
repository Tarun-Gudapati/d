"use strict";

const switcher = document.querySelector(".btn");

switcher.addEventListener("click", function () {
  document.body.classList.toggle("green-theme");
  document.body.classList.toggle("red-theme");

  const className = document.body.className;
  if (className == "green-theme") {
    this.textContent = "red";
  } else {
    this.textContent = "green";
  }

  console.log("current class name: " + className);
});
