let incButton = document.querySelector('.button_inc-button');
let decButton = document.querySelector('.button_dec-button');
let spinButton = document.querySelector('.spin');
let coins = document.querySelector(".currency-field__score_coins");
let stars = document.querySelector(".currency-field__score_stars");
let winWord = document.querySelector(".text_word");
let winSum = document.querySelector(".text_num");
let bet = document.querySelector(".bet-size__text");
let autoButton = document.querySelector(".auto");
let column1 = document.querySelector(".main__column_1");
let column2 = document.querySelector(".main__column_2");
let column3 = document.querySelector(".main__column_3");
let column = document.querySelectorAll(".main__column");


let done = new Event('done');

let flag = true;

let arr1 = [];
let arr2 = [];
let arr3 = [];

function increase () {
    document.querySelector(".bet-size__text").innerText = +document.querySelector(".bet-size__text").innerText + 100;
    sessionStorage.setItem("bet", document.querySelector(".bet-size__text").innerText);
}

function decrease () {
    if(+document.querySelector(".bet-size__text").innerText > 0){
        document.querySelector(".bet-size__text").innerText = +document.querySelector(".bet-size__text").innerText - 100;
        sessionStorage.setItem("bet", document.querySelector(".bet-size__text").innerText);
    }
}

function play(){
    if(+bet.innerText > +coins.innerText){
        alert("Your bet is higher than your balance. Decrease bet");
        return;
    }
    if(+coins.innerText === 0){
        alert("You're out of money");
        return;
    }
    if(+bet.innerText === 0){
        alert("You need to increase the bet");
        return;
    }
    spinButton.removeEventListener("click", play);
    incButton.removeEventListener('click', increase);
    decButton.removeEventListener('click', decrease);
    winWord.innerText = "";
    winSum.innerText = "";
    stars.innerText = (+sessionStorage.getItem("stars").split("/")[0] + 100) + "/9000";
    sessionStorage.setItem("stars",stars.innerText);
    coins.innerText = +(coins.innerText) - sessionStorage.getItem("bet");
    sessionStorage.setItem("coins",coins.innerText);
    spin();
}

function spin(){
    for(let elem of column){
        elem.style.transition = "2s";
        elem.style.top = "0.275vw";
    }
    column1.addEventListener("transitionend", rebuild);
}

function rebuild(){
    incButton.addEventListener('click', increase);
    decButton.addEventListener('click', decrease)
    spinButton.addEventListener("click", play);
    if(arr1[arr1.length-2] === arr2[arr2.length-2] && arr2[arr2.length-2] === arr3[arr3.length-2]){
        coins.innerText = +coins.innerText + +sessionStorage.getItem("bet") * 5;
        winWord.innerText = "WIN";
        winSum.innerText = +sessionStorage.getItem("bet") * 5;
    }
    for (let i = 0; i < 3; i++) {
        arr1[i] = arr1[i+5];
        arr2[i] = arr2[i+5];
        arr3[i] = arr3[i+5];
    }
    arr1 = arr1.slice(0,3);
    arr2 = arr2.slice(0,3);
    arr3 = arr3.slice(0,3);
    for (let i = 0; i < 5; i++) {
        arr1.push(Math.floor(Math.random()*8 + 1));
        arr2.push(Math.floor(Math.random()*8 + 1));
        arr3.push(Math.floor(Math.random()*8 + 1));
    }
    for (let i = 0; i < 8; i++) {
        //first column
        document.querySelector(`.column1-item${i+1}`).style.backgroundImage = `url("assets/img/card${arr1[i]}.png")`;
        //second column
        document.querySelector(`.column2-item${i+1}`).style.backgroundImage = `url("assets/img/card${arr2[i]}.png")`;
        //third column
        document.querySelector(`.column3-item${i+1}`).style.backgroundImage = `url("assets/img/card${arr3[i]}.png")`;
    }
    for(let elem of column){
        elem.style.transition = "0s";
        elem.style.top = "-48.525vw";
    }
    document.dispatchEvent(done);
}

function launchStopAutoPlay() {
    if(!flag){
        document.removeEventListener('done',play);
        flag = true;
    }
    else{
        flag = false;
        document.addEventListener('done',play);
        play();
    }
}

// start
if(sessionStorage.getItem("bet") !== null){
    document.querySelector(".bet-size__text").innerText = sessionStorage.getItem("bet");
}
else{
    document.querySelector(".bet-size__text").innerText = 0;
}

if(sessionStorage.getItem("coins") !== null){
    document.querySelector(".currency-field__score_coins").innerText = sessionStorage.getItem("coins");
}
else{
    document.querySelector(".currency-field__score_coins").innerText = 1000000;
    sessionStorage.setItem("coins",1000000);
}

if(sessionStorage.getItem("stars") !== null){
    document.querySelector(".currency-field__score_stars").innerText = sessionStorage.getItem("stars");
}
else{
    document.querySelector(".currency-field__score_stars").innerText = "0/9000";
    sessionStorage.setItem("stars","0/9000");
}

for(let i = 0; i < 8; i++){
    arr1.push(Math.floor(Math.random()*8 + 1));
    arr2.push(Math.floor(Math.random()*8 + 1));
    arr3.push(Math.floor(Math.random()*8 + 1));
}

for (let i = 0; i < 8; i++) {
    //first column
    let invisibleElemForCol1 = document.createElement("div");
    invisibleElemForCol1.setAttribute("class", `item column1-item${i+1}`)
    invisibleElemForCol1.style.backgroundImage = `url("assets/img/card${arr1[i]}.png")`;
    document.querySelector(".main__column_1").prepend(invisibleElemForCol1);
    //second column
    let invisibleElemForCol2 = document.createElement("div");
    invisibleElemForCol2.setAttribute("class", `item column2-item${i+1}`);
    invisibleElemForCol2.style.backgroundImage = `url("assets/img/card${arr2[i]}.png")`;
    document.querySelector(".main__column_2").prepend(invisibleElemForCol2);
    //third column
    let invisibleElemForCol3 = document.createElement("div");
    invisibleElemForCol3.setAttribute("class", `item column3-item${i+1}`);
    invisibleElemForCol3.style.backgroundImage = `url("assets/img/card${arr3[i]}.png")`;
    document.querySelector(".main__column_3").prepend(invisibleElemForCol3);
}

spinButton.addEventListener("click", play);
incButton.addEventListener('click', increase);
decButton.addEventListener('click', decrease);
autoButton.addEventListener('click', launchStopAutoPlay);



