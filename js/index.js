
let submit = document.querySelector('#submit-btn');

let radioBtn = document.getElementsByTagName('input');

let btnLabel = document.getElementsByClassName('display');
console.log(btnLabel);
submit.addEventListener('click', () => {
    for (let btn of radioBtn) {
        console.log(btn.checked);
    }
})
