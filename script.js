// clase 4 - manipulando DOM
let treinoRaw = 'leg press 45,50 8.65 10.80 7';

const clickMe = () => {
    const containerDiv = document.querySelector('.container');
    const resultP = document.createElement('p');
    resultP.innerText = 'Hi';
    containerDiv.appendChild(resultP);
};
/* const onLoad = () => {
    const buttonText = document.querySelector("#click-button");
    buttonText.addEventListener('click', clickMe)
};
*/
//do this on browser. cause here it doesnt work


const clickToCount = () => {
    let counterText = document.querySelector('.counter-text').innerText;
    let counterArray = counterText.split();
    let count = counterArray[0];
    let counterVal = parseInt(count);
    counterVal += 1;
    document.querySelector('.counter-text').innerText = `${counterVal}  ${counterArray[1]}`
};
const onLoad = () => {
    let buttonText = document.querySelector("#click-button");
    buttonText.addEventListener('click',  clickToCount);
}
window.onload = onLoad;