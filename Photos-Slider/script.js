const imgArray = [
    "https://images.unsplash.com/photo-1709896532924-6402190897ac?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1710236026860-f7eb92555ccd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1710327853365-44a7ee42209f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1710415346034-4f445006915c?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1710424550415-28ed2b411c2c?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1710095800123-32fa1d53489d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]
let activePhotos = [];
let currentItem = 0;
let imgCar = document.getElementById("images");
let leftButton = document.getElementById("leftBtn");
let rightButton = document.getElementById("rightBtn");

window.addEventListener('DOMContentLoaded', function () {
    for (let i = currentItem; i < 4; i++) {
        activePhotos.push(imgArray[i]);
        imgCar.innerHTML += `<img src="${activePhotos[i]}">`;
    }

});

leftButton.addEventListener("click", function () {
    activePhotos.pop();

    // if (currentItem < 0) {
    //     currentItem = imgArray.length - 1;
    // }
    showImages(currentItem);
});

rightButton.addEventListener("click", function () {
  
    // console.log(currentItem);
    currentItem = activePhotos.length;
    activePhotos.shift();
    activePhotos.push(imgArray[currentItem++]);
    // console.log(activePhotos);
    showImages(activePhotos);
});

function showImages(activePhotos) {
    imgCar.innerHTML = '';
    for (let i = 0; i < activePhotos.length; i++) {
        imgCar.innerHTML += `<img src="${activePhotos[i]}">`;
    }
}

