const labels = document.querySelectorAll("label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

//.split()//splits into an array with each letter of the innerText;
//.join()//turns each back into a string
