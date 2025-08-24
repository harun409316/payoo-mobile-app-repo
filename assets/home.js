const validPin = 1234;
// function get to input values
function getInputValueNumber(id){
    const inputFieldValue = parseInt(document.getElementById(id).value)
    return inputFieldValue;
    
}

function getInputValue(id){
    const inputFieldValue = parseInt(document.getElementById(id).value)
    return inputFieldValue;
}

//  add money feature 
document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    console.log('add money');
    const bank = getInputValue('bank');
    const accountNumber = document.getElementById('account-number').value;
    const addAmount = getInputValueNumber('add-amount')
    const pinNumber = getInputValueNumber('add-pin')

   const availableBalace = parseInt(document.getElementById('available-balace').innerText)

   if(accountNumber.length<11){
    alert('Invalid number');
    return;
   }
   if(pinNumber !== validPin){
    alert('Invalid Pin number');
    return;
   }

 
    const totalNewAvailableBalace = addAmount + availableBalace
    document.getElementById('available-balace')
    .innerText = totalNewAvailableBalace
})


document.getElementById('widthdraw-btn').addEventListener('click', function(e){
    e.preventDefault()
   
    const amount = getInputValueNumber('widthdraw-amount');
    
    const availableBalace = parseInt(document.getElementById('available-balace').innerText)
  
    const totalNewAvailableBalace = availableBalace - amount
    document.getElementById('available-balace')
    .innerText = totalNewAvailableBalace
})




// trogling feature
document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'block'
})
document.getElementById('cashout-button').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'block'
})