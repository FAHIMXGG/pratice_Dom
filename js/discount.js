document.getElementById('submit').addEventListener('click', function (){
    //console.log('gg')
    const inputField = document.getElementById('input');
    const input = inputField.value;
    //console.log(input)
    if (input === 'GG10%') {
        
    const amountMoney = document.getElementById('price');
    //console.log(amountMoney);
    const amountMoneyString = amountMoney.innerText;
    //console.log(amountMoneyString);
    const amount = parseFloat(amountMoneyString);
    //console.log(amount);


    const discount = document.getElementById('total');

    const total = amount * 0.9;
    discount.innerText = total;
    alert('congratulation you have got a 10% discount')
    }

    else if (input === 'GG20%') {
        
    const amountMoney = document.getElementById('price');
    //console.log(amountMoney);
    const amountMoneyString = amountMoney.innerText;
    //console.log(amountMoneyString);
    const amount = parseFloat(amountMoneyString);
    //console.log(amount);


    const discount = document.getElementById('total');

    const total = amount * 0.8;
    discount.innerText = total;
    alert('congratulation you have got a 20% discount')
    }
    else if (input === 'GG05%') {
        
    const amountMoney = document.getElementById('price');
    //console.log(amountMoney);
    const amountMoneyString = amountMoney.innerText;
    //console.log(amountMoneyString);
    const amount = parseFloat(amountMoneyString);
    //console.log(amount);


    const discount = document.getElementById('total');

    const total = amount * 0.95;
    discount.innerText = total;
    alert('congratulation you have got a 5% discount');
    }
    else if (input === 'SAM100%') {
        
        const amountMoney = document.getElementById('price');
        //console.log(amountMoney);
        const amountMoneyString = amountMoney.innerText;
        //console.log(amountMoneyString);
        const amount = parseFloat(amountMoneyString);
        //console.log(amount);
    
    
        const discount = document.getElementById('total');
    
        const total = amount * 0;
        discount.innerText = total;
        alert('congratulation you have got a 100% discount');
        }
    else if (input === '') {
        
    const amountMoney = document.getElementById('price');
    //console.log(amountMoney);
    const amountMoneyString = amountMoney.innerText;
    //console.log(amountMoneyString);
    const amount = parseFloat(amountMoneyString);
    //console.log(amount);


    const discount = document.getElementById('total');

    const total = amount * 1;
    discount.innerText = total;
    alert('No Discount')
    }
    
else{
    const amountMoney = document.getElementById('price');
    //console.log(amountMoney);
    const amountMoneyString = amountMoney.innerText;
    //console.log(amountMoneyString);
    const amount = parseFloat(amountMoneyString);
    //console.log(amount);


    const discount = document.getElementById('total');

    const total = amount * 1;
    discount.innerText = total;
    alert('Wrong Coupon')
    
}

})