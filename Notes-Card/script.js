const settingEl = document.getElementById("setting");
const otherEl = document.getElementById("other");
const containerEl = document.getElementById("container");

settingEl.addEventListener("click", () => {
    
    console.log("clicked");
    otherEl.innerHTML =
        `
        <div id="other-inside" class="flex p-2">
        <div  class="p-2">
        <p>Add</p>
        <p>Update</p>
        <p>Delete</p>
        </div>
        <i id="close" class="fa-solid fa-xmark cursor-pointer"></i>
        </div>
    `;
    close();
}, );
const close = () => {
    document.getElementById("close").addEventListener("click", () => {
        console.log("closingg");
        document.getElementById("other-inside").remove();
    });
}
document.getElementById("save").addEventListener("click", () => {
    containerEl.innerHTML = "Saved Successfully!";
})