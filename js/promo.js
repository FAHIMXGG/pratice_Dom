

document.getElementById('p1').addEventListener('click', function(){
    const textArea = document.getElementById('product1');
    const product1 = document.getElementById('p1');
    const product1InnerText = product1.innerText;
    //console.log(product1InnerText);
    textArea.innerText = product1InnerText;
})
document.getElementById('p2').addEventListener('click', function(){
    const textArea = document.getElementById('product2');
    const product1 = document.getElementById('p2');
    const product1InnerText = product1.innerText;
    //console.log(product1InnerText);
    textArea.innerText = product1InnerText;
})
document.getElementById('p3').addEventListener('click', function(){
    const textArea = document.getElementById('product3');
    const product1 = document.getElementById('p3');
    const product1InnerText = product1.innerText;
    //console.log(product1InnerText);
    textArea.innerText = product1InnerText;
})
document.getElementById('p4').addEventListener('click', function(){
    const textArea = document.getElementById('product4');
    const product1 = document.getElementById('p4');
    const product1InnerText = product1.innerText;
    //console.log(product1InnerText);
    textArea.innerText = product1InnerText;
})

document.getElementById('calculate').addEventListener('click', function (){

    const result = document.getElementById('result')

    const productOne = document.getElementById('product1')
    const productOneString = productOne.innerText
    const productOneNum = parseFloat(productOneString);

    const productTwo = document.getElementById('product2')
    const productTwoString = productTwo.innerText
    const productTwoNum = parseFloat(productTwoString);

    const productThree = document.getElementById('product3')
    const productThreeString = productThree.innerText
    const productThreeNum = parseFloat(productThreeString);

    const productFour = document.getElementById('product4')
    const productFourString = productFour.innerText
    const productFourNum = parseFloat(productFourString);


const calculation = productOneNum + productTwoNum +productThreeNum + productFourNum;
const calculationNum = parseFloat(calculation);

//console.log(calculationNum);

    result.innerText = calculation;
    //console.log(productOneNum);

})