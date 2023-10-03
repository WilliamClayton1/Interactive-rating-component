let submit = document.querySelector('#submit-btn');
let radioBtn = document.getElementsByTagName('input');
let span = document.querySelector('span');
let rating = document.querySelector('.rating-container');
let results = document.querySelector('.results-container');

results.style.display = 'none';

submit.addEventListener('click', () => {
    rating.style.display = 'none';
    results.style.display = 'flex';

    for (let btn of radioBtn) {
        if (btn.checked) {
            span.innerText = btn.value
        }
    }
})
