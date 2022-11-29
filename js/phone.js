function updatePhoneNumber(isIncrese){
    const phoneNumberInput = document.getElementById('phone-input');
    const phoneNumberValueString = phoneNumberInput.value;
    const phoneNumberValue = parseInt(phoneNumberValueString);
    // console.log(caseNumberValue);
    // const phoneNumberNew = phoneNumberValue + 1;
    let newPhoneNumber;
    if(isIncrese === true){
        newPhoneNumber = phoneNumberValue + 1;
        
    }
    else{
        newPhoneNumber = phoneNumberValue - 1;
        
    }

    phoneNumberInput.value = newPhoneNumber;

    return newPhoneNumber;
}


function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 2000;
    const phoneTotalElement = document.getElementById('phone-price');
    phoneTotalElement.innerText = phoneTotalPrice;
}





document.getElementById('btn-phone-plus').addEventListener('click' , function(){
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);

    // calculate total
    calculateSubTotal();

})

document.getElementById('btn-phone-minus').addEventListener('click' , function(){
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
})


