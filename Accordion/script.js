const accordion = document.getElementsByClassName('container');
const content = document.getElementsByClassName("content");
for (let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function () {
        console.log("click");
        content[i].classList.toggle('active');
    })
}