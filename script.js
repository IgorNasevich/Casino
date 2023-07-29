let incButton = document.querySelector('.button_inc-button');
let decButton = document.querySelector('.button_dec-button');
let spinButton = document.querySelector('.spin');
let coins = document.querySelector(".currency-field__score_coins");
let stars = document.querySelector(".currency-field__score_stars");
let winWord = document.querySelector(".text_word");
let winSum = document.querySelector(".text_num");
let bet = document.querySelector(".bet-size__text");
let autoButton = document.querySelector(".auto");

let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");

function spin(i){
    //fist column
    one.style.backgroundImage = `url("assets/img/card${arr1[i + 1]}.png")`;
    two.style.backgroundImage = `url("assets/img/card${arr1[i + 2]}.png")`;
    three.style.backgroundImage = `url("assets/img/card${arr1[i + 3]}.png")`;

    //second column
    four.style.backgroundImage = `url("assets/img/card${arr2[i + 1]}.png")`;
    five.style.backgroundImage = `url("assets/img/card${arr2[i + 2]}.png")`;
    six.style.backgroundImage = `url("assets/img/card${arr2[i + 3]}.png")`;

    //third column
    seven.style.backgroundImage = `url("assets/img/card${arr3[i + 1]}.png")`;
    eight.style.backgroundImage = `url("assets/img/card${arr3[i +  2]}.png")`;
    nine.style.backgroundImage = `url("assets/img/card${arr3[i + 3]}.png")`;

    if(i === 4){
        incButton.addEventListener('click', increase);
        decButton.addEventListener('click', decrease)
        spinButton.addEventListener("click", play);
        if(arr1[6] === arr2[6] && arr2[6] === arr3[6]){
            coins.innerText = +coins.innerText + +sessionStorage.getItem("bet") * 5;
            winWord.innerText = "WIN";
            winSum.innerText = +sessionStorage.getItem("bet") * 5;
        }
        console.log(arr1);
        for (let i = 0; i < 3; i++) {
            arr1[i] = arr1[i+5];
            arr2[i] = arr2[i+5];
            arr3[i] = arr3[i+5];
        }
        console.log(arr1);

            arr1 = arr1.slice(0,3);
            arr2 = arr2.slice(0,3);
            arr3 = arr3.slice(0,3);
        console.log(arr1);

        for (let i = 0; i < 5; i++) {
            arr1.push(Math.floor(Math.random()*8 + 1));
            arr2.push(Math.floor(Math.random()*8 + 1));
            arr3.push(Math.floor(Math.random()*8 + 1));
        }
        console.log(arr1);
    }
}

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
    for (let i = 0; i < 5; i++) {
        setTimeout(spin, (400 * (i + 1)), i);
    };
    coins.innerText = +(coins.innerText) - sessionStorage.getItem("bet");
}

function launchAutoPlay() {
    
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

let arr1 = [];
let arr2 = [];
let arr3 = [];

for(let i = 0; i < 8; i++){
    arr1.push(Math.floor(Math.random()*8 + 1));
    arr2.push(Math.floor(Math.random()*8 + 1));
    arr3.push(Math.floor(Math.random()*8 + 1));
}

//first column
one.style.backgroundImage = `url("assets/img/card${arr1[0]}.png")`;
two.style.backgroundImage = `url("assets/img/card${arr1[1]}.png")`;
three.style.backgroundImage = `url("assets/img/card${arr1[2]}.png")`;

//second column
four.style.backgroundImage = `url("assets/img/card${arr2[0]}.png")`;
five.style.backgroundImage = `url("assets/img/card${arr2[1]}.png")`;
six.style.backgroundImage = `url("assets/img/card${arr2[2]}.png")`;

//third column
seven.style.backgroundImage = `url("assets/img/card${arr3[0]}.png")`;
eight.style.backgroundImage = `url("assets/img/card${arr3[1]}.png")`;
nine.style.backgroundImage = `url("assets/img/card${arr3[2]}.png")`;

spinButton.addEventListener("click", play);
incButton.addEventListener('click', increase);
decButton.addEventListener('click', decrease);
autoButton.addEventListener('click', launchAutoPlay);



