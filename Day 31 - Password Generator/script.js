const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowecaseEl = document.getElementById("lowecase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowecaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;
  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

clipboardEl.addEventListener("click", () => {
  const textArea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  alert("Password copies to clipboard");
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  if (typesCount === 0) {
    return " ";
  }

  for (let i = 0; i < length; i += typesCount) {
    console.log(i);
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}][=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
