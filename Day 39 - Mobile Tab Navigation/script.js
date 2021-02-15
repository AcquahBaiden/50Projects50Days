const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    hideAllContents();
    hideAllItems();

    item.classList.add("active");
    contents[idx].classList.add("show");
  });
});

function hideAllItems() {
  contents.forEach((content) => content.classList.remove("show"));
}

function hideAllContents() {
  listItems.forEach((item) => item.classList.remove("active"));
}
