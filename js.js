const container = document.querySelector(".container");
let gridSize = 16;

for (let i = 1; i <= (gridSize * gridSize); i++) {
    const item = document.createElement("div");
    item.classList.add("item");
    item.style.height = "40px";
    item.style.width = "40px";
    container.appendChild(item);
}

const items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("mouseover", () => item.style["background-color"] = "gray");
});

const body = document.querySelector("body");

const barDiv = document.createElement("div");
body.insertBefore(barDiv, container);

const input = document.createElement("input");
input.placeholder = "Enter a custom grid dimension";

const changeButton = document.createElement("Button");
changeButton.textContent = "Change Size";

const clearButton = document.createElement("button");
clearButton.textContent = "Clear";

barDiv.style.display = "flex";
barDiv.style.gap = "40px"

barDiv.append(input, changeButton, clearButton);

clearButton.addEventListener("click", function() {
    const items = document.querySelectorAll(".item");
    items.forEach(item => item.style["background-color"] = "white")
});

changeButton.addEventListener("click", () => changeGrid(input.value));

function changeGrid(dimension) {
    let items = document.querySelectorAll(".item");
    items.forEach(item => item.remove());
    let itemDimension = 640 / dimension;
    for (let i = 1; i <= (dimension * dimension); i++) {
        const item = document.createElement("div");
        item.classList.add("item");
        item.style.height = `${itemDimension}px`;
        item.style.width = `${itemDimension}px`;
        container.appendChild(item);
    }
    let newItems = document.querySelectorAll(".item");
    newItems.forEach(item => {
        item.addEventListener("mouseover", () => item.style["background-color"] = "gray");
    });
};
