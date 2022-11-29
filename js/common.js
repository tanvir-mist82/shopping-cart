function getTextElementById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}


function setTextElementById(elementId , value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementById('phone-price');
    const currentCaseTotal = getTextElementById('case-total');


    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    setTextElementById('sub-total' , currentSubTotal);

    // calculate Tax

    const taxAmountString = (currentSubTotal * .05).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementById('tax-amount' , taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementById('final-total' , finalAmount);

}



