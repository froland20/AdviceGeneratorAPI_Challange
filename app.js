const advID = document.querySelector('#id');
const advText = document.querySelector('#advice');
const resBtn = document.querySelector('#getData');

resBtn.addEventListener('click', () => {
    getAdvice();
})

window.onload = () => {
    getAdvice();
}

function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        const Adviceobj = adviceData.slip;
        advID.innerHTML = `<p>Advice #${Adviceobj.id}</p>`;
        advText.innerHTML = `<p>"${Adviceobj.advice}"</p>`;
    }).catch(error => {
        console.log(error);
    });
}