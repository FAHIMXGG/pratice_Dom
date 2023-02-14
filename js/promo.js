

document.getElementById('p1').addEventListener('click', function(){
    const hiddenText = document.getElementById('p1-info');
    hiddenText.style.display = 'block';
    const textArea = document.getElementById('product1');
    const product1 = document.getElementById('p11');
    const product1InnerText = product1.value;
    //console.log(product1InnerText);
    const totalProduct1= product1InnerText * 100;
    textArea.innerText = totalProduct1;
})
document.getElementById('p2').addEventListener('click', function(){
    const hiddenText = document.getElementById('p2-info');
    hiddenText.style.display = 'block';
    const textArea = document.getElementById('product2');
    const product2 = document.getElementById('p12');
    const product2InnerText = product2.value;
    //console.log(product1InnerText);
    const totalProduct2= product2InnerText * 150;
    textArea.innerText = totalProduct2;
})
document.getElementById('p3').addEventListener('click', function(){
    const hiddenText = document.getElementById('p3-info');
    hiddenText.style.display = 'block';
    const textArea = document.getElementById('product3');
    const product3 = document.getElementById('p13');
    const product3InnerText = product3.value;
    const totalProduct3= product3InnerText * 80;
    //console.log(product1InnerText);
    textArea.innerText = totalProduct3;
})
document.getElementById('p4').addEventListener('click', function(){
    const hiddenText = document.getElementById('p4-info');
    hiddenText.style.display = 'block';
    const textArea = document.getElementById('product4');
    const product4 = document.getElementById('p14');
    const product4InnerText = product4.value;
    const totalProduct4= product4InnerText * 50;
    //console.log(product1InnerText);
    textArea.innerText = totalProduct4;
})

document.getElementById('calculate').addEventListener('click', function (){

    const result = document.getElementById('price')

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

price.innerText = calculation;
    //console.log(productOneNum);

})