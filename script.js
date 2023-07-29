let arr1 = [];
let arr2 = [];
let arr3 = [];

for(let i = 0; i < 8; i++){
    arr1.push(Math.floor(Math.random()*8 + 1));
}
for(let i = 0; i < 8; i++){
    arr2.push(Math.floor(Math.random()*8 + 1));
}
for(let i = 0; i < 8; i++){
    arr3.push(Math.floor(Math.random()*8 + 1));
}

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// page loading
//first column
document.getElementById("1").style.backgroundImage = `url("assets/img/card${arr1[0]}.png")`;
document.getElementById("2").style.backgroundImage = `url("assets/img/card${arr1[1]}.png")`;
document.getElementById("3").style.backgroundImage = `url("assets/img/card${arr1[2]}.png")`;

//second column
document.getElementById("4").style.backgroundImage = `url("assets/img/card${arr2[0]}.png")`;
document.getElementById("5").style.backgroundImage = `url("assets/img/card${arr2[1]}.png")`;
document.getElementById("6").style.backgroundImage = `url("assets/img/card${arr2[2]}.png")`;

//second column
document.getElementById("7").style.backgroundImage = `url("assets/img/card${arr3[0]}.png")`;
document.getElementById("8").style.backgroundImage = `url("assets/img/card${arr3[1]}.png")`;
document.getElementById("9").style.backgroundImage = `url("assets/img/card${arr3[2]}.png")`;

let spinButton = document.querySelector('.spin');
console.log(spinButton);


spinButton.addEventListener("click", ()=>{

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }
})