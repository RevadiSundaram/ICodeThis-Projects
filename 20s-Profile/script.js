const followEl = document.getElementById('follow');
let buttonEl = document.getElementById('follow-btn');

followEl.addEventListener('click', function () {
    buttonEl.textContent = 'Following';
})