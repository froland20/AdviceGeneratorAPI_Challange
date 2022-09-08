const advID = document.querySelector('.content span');
const advText = document.querySelector('.content q');
const resBtn = document.querySelector('.dice');

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
        advID.innerHTML = `Advice #${Adviceobj.id}`;
        advText.innerHTML = `${Adviceobj.advice}`;
    }).catch(error => {
        console.log(error);
    });
}