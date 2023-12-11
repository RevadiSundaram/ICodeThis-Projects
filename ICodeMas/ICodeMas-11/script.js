const btns = document.querySelectorAll('.btn-dol');
const amount = document.getElementById('amount');
const closeBtn = document.getElementById('btn');
const container = document.getElementById('container');


btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        amount.value = e.target.textContent;
    })
});

closeBtn.addEventListener('click', function () {
    container.classList.add('hide');
    
    setTimeout(function () {
        container.classList.remove('hide');
    }, 2000);

});