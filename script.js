let spinButton = document.querySelector('.spin');

// generate
let arr1 = [];
let arr2 = [];
let arr3 = [];

for(let i = 0; i < 8; i++){
    arr1.push(Math.floor(Math.random()*8 + 1));
    arr2.push(Math.floor(Math.random()*8 + 1));
    arr3.push(Math.floor(Math.random()*8 + 1));
}

function spin(i){
    //fist column
    document.getElementById("1").style.backgroundImage = `url("assets/img/card${arr1[i + 2]}.png")`;
    document.getElementById("2").style.backgroundImage = `url("assets/img/card${arr1[i + 1]}.png")`;
    document.getElementById("3").style.backgroundImage = `url("assets/img/card${arr1[i]}.png")`;

    //second column
    document.getElementById("4").style.backgroundImage = `url("assets/img/card${arr2[i + 2]}.png")`;
    document.getElementById("5").style.backgroundImage = `url("assets/img/card${arr2[i + 1]}.png")`;
    document.getElementById("6").style.backgroundImage = `url("assets/img/card${arr2[i]}.png")`;

    //third column
    document.getElementById("7").style.backgroundImage = `url("assets/img/card${arr3[i + 2]}.png")`;
    document.getElementById("8").style.backgroundImage = `url("assets/img/card${arr3[i + 1]}.png")`;
    document.getElementById("9").style.backgroundImage = `url("assets/img/card${arr3[i]}.png")`;
}

// page loading
//first column
document.getElementById("1").style.backgroundImage = `url("assets/img/card${arr1[2]}.png")`;
document.getElementById("2").style.backgroundImage = `url("assets/img/card${arr1[1]}.png")`;
document.getElementById("3").style.backgroundImage = `url("assets/img/card${arr1[0]}.png")`;

//second column
document.getElementById("4").style.backgroundImage = `url("assets/img/card${arr2[2]}.png")`;
document.getElementById("5").style.backgroundImage = `url("assets/img/card${arr2[1]}.png")`;
document.getElementById("6").style.backgroundImage = `url("assets/img/card${arr2[0]}.png")`;

//third column
document.getElementById("7").style.backgroundImage = `url("assets/img/card${arr3[2]}.png")`;
document.getElementById("8").style.backgroundImage = `url("assets/img/card${arr3[1]}.png")`;
document.getElementById("9").style.backgroundImage = `url("assets/img/card${arr3[0]}.png")`;

spinButton.addEventListener("click", ()=>{
    for (let i = 0; i < 5; i++) {
        setTimeout(spin, (300 * i - 1), i);
    }
})
