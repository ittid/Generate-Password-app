/*=== === === === === === === === ===
~~~ JavaScript Password Generator ~~~
=== === === === === === === === ===*/

// === Generate password Main Function ===
addEventListener("DOMContentLoaded", function () {
  // Password data
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "@!%£§+&(_><*-$)=+";

  // Declare the variables
  const password = document.querySelector(".password");
  const reloadPass = document.querySelector(".reload_pass");
  const checkboxInputNumber = document.getElementById("num");
  const checkboxInputSymbol = document.getElementById("symbols");
  const checkboxInputUpperCase = document.getElementById("alpha");
  const checkboxInputRange = document.getElementById("range");
  const rangeValue = document.getElementById("range_v");
  const uppercase = document.getElementById("uppercase");

  // show range init value before chnage it
  rangeValue.textContent = checkboxInputRange.value;

  // show value while change range
  checkboxInputRange.addEventListener("change", function (e) {
    rangeValue.textContent = this.value;
  });

  // Listen a button with eventListener
  reloadPass.addEventListener("click", function (e) {
    // run the converting data
    dataConvertToArray(alphabet, numbers, symbols);
  });

  // Convert data to string
  function dataConvertToArray(alp, num, sym) {
    const alphabet = [...alp];
    const numbers = [...num];
    const symbols = [...sym];
    return generatePassword(alphabet, numbers, symbols);
  }
  function generatePassword(alpArr, numArr, symArr) {
    if (
      !checkboxInputNumber.checked &&
      !checkboxInputSymbol.checked &&
      !checkboxInputUpperCase.checked
    ) {
      reloadPass.textContent = "Please check The data Type you want";
      reloadPass.style.backgroundColor = "red";
      return;
    } else {
      reloadPass.style.backgroundColor = "#cddc39";
      reloadPass.textContent = "Generate password";
    }

    let random = [];

    if (checkboxInputNumber.checked === true) {
      for (let i = 0; i < checkboxInputRange.value; i++) {
        random.push(numArr[Math.floor(Math.random() * numArr.length)]);
      }
    }

    if (checkboxInputSymbol.checked === true) {
      for (let i = 0; i < checkboxInputRange.value; i++) {
        random.push(symArr[Math.floor(Math.random() * symArr.length)]);
      }
    }

    if (checkboxInputUpperCase.checked === true) {
      for (let i = 0; i < checkboxInputRange.value; i++) {
        random.push(alpArr[Math.floor(Math.random() * alpArr.length)]);
      }
    }
    // Randomize position of elements in an array
    random.sort(function () {
      return Math.random() - 0.5;
    });
    if (uppercase.checked === true) {
      const outputValue = (password.textContent = random
        .join("")
        .substring(0, checkboxInputRange.value)
        .toUpperCase());
    } else {
      const outputValue = (password.textContent = random
        .join("")
        .substring(0, checkboxInputRange.value));
    }

    return outputValue;
  }
});
