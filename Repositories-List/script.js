const findEl = document.getElementById("findEl");
const enterEl = document.getElementById("enterEl");
const displayEl = document.getElementById("displayEl");
const inputEl = document.getElementById("inputEl");
const createEl = document.getElementById("createEl");

const data = [
    "lldiko/react-tutorial-pics", "lldiko/react-tutorial-season", "lldiko/react-tutorial-components", "lldiko/react-tutorial-jsx"
]
window.onload = function(){
    console.log("loaded");
    display();
}

findEl.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        const search = findEl.value
        const filter = data.filter(item => (item.includes(search)))
        console.log(filter);
        displayEl.innerHTML = filter.join("<br>");
        findEl.value = "";
    }
})

enterEl.addEventListener("click", () => {

    console.log(findEl.value);
    const search = findEl.value
    const filter = data.filter(item => (item.includes(search)))
    console.log(filter);
    displayEl.innerHTML = filter.join("<br>");
    findEl.value = "";
})

createEl.addEventListener("click", () => {
    data.push(inputEl.value);
    display();
    inputEl.value = "";
})

function display() {
    displayEl.innerHTML = data.map(item => item).join("<br>");
}