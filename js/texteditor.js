const textElement = document.querySelector('.text');


// document.getElementById('color').addEventListener('click', function() {
//     document.querySelector('.text').style.color = 'green';
// })

const colorButton = document.getElementById('color');
// colorButton.addEventListener('click', function(){
//     if (textElement.style.color === 'green') {
//         textElement.style.color = '';
//     }
//     else{
//         textElement.style.color = 'green';
//     }
// })
const colors = ['red', 'green', 'blue', 'orange'];
let currentColorIndex = 0;

colorButton.addEventListener('click', function(){
    if (currentColorIndex >= colors.length) {
        currentColorIndex = 0;
    }
    textElement.style.color = colors[currentColorIndex];
    currentColorIndex++;
});

// document.getElementById('font-size').addEventListener('click', function(){
//     document.querySelector('.text').style.fontSize = 'x-large';
// })

const fontSizeButton = document.getElementById('font-size');

fontSizeButton.addEventListener('click', function(){
    if (textElement.style.fontSize === "x-large") {
        textElement.style.fontSize = "";
    } else {
        textElement.style.fontSize = "x-large";
    }
});


// document.getElementById('bold').addEventListener('click', function (){
//     document.querySelector('.text').style.fontWeight = 'bold';
// })
const boldButton = document.getElementById('bold');
boldButton.addEventListener('click', function(){
    if (textElement.style.fontWeight === "bold") {
        textElement.style.fontWeight = "normal";
    } else {
        textElement.style.fontWeight = "bold";
    }
});

// document.getElementById('italic').addEventListener('click', function(){
//     document.querySelector('.text').style.fontStyle = "italic";
// })
const italicButton = document.getElementById('italic');
italicButton.addEventListener('click', function(){
    if (textElement.style.fontStyle === "italic") {
        textElement.style.fontStyle = "normal";
    } else {
        textElement.style.fontStyle = "italic";
    }
});


// document.getElementById('center').addEventListener('click', function(){
//     document.querySelector('.text').style.textAlign = "center";
// })
const centerButton = document.getElementById('center');
// const textElement = document.querySelector('.text');
centerButton.addEventListener('click', function(){
    if (textElement.style.textAlign === "center") {
        textElement.style.textAlign = "";
    } else {
        textElement.style.textAlign = "center";
    }
});