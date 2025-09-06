const validPin = 1234;
const transactionData = []
// function get to input values
function getInputValueNumber(id){
    const inputFieldValue = parseInt(document.getElementById(id).value)
    return inputFieldValue;
    
}

function getInputValue(id){
    const inputFieldValue = parseInt(document.getElementById(id).value)
    return inputFieldValue;
}

// function to get innerText 
function getInnerText(id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber;
}

// function to setInnertext
function setInnertext(value){
    const availableBalaceElement = document.getElementById('available-balace')
    availableBalaceElement.innerText = value
    
}


// function to trogle 

function handleToggle(id){
    const forms = document.getElementsByClassName('form')

 
for(const form of forms){
    form.style.display  = 'none'
}
document.getElementById(id).style.display = 'block'
}

function handleButtonToggle(id){
    const formBtns = document.getElementsByClassName('form-btn')

for(const btn of formBtns){
 btn.classList.remove('border-[#0874f2]','bg-[#0874f20d]')
 btn.classList.add('border-gray-300')
}

document.getElementById(id).classList.remove('border-gray-300')
document.getElementById(id).classList.add('border-[#0874f2]','bg-[#0874f20d]')
}

//  add money feature 
document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    console.log('add money');
    const bank = getInputValue('bank');
    const accountNumber = document.getElementById('account-number').value;
    const addAmount = getInputValueNumber('add-amount')
    const pinNumber = getInputValueNumber('add-pin')

   const availableBalace = getInnerText('available-balace')

   if(accountNumber.length<11){
    alert('Invalid number');
    return;
   }
   if(pinNumber !== validPin){
    alert('Invalid Pin number');
    return;
   }

 
    const totalNewAvailableBalace = addAmount + availableBalace
    
  
    setInnertext(totalNewAvailableBalace)

   const data = {
    name: 'add money',
    date: new Date().toLocaleTimeString()
   }

   transactionData.push(data)
   console.log(transactionData);
})


document.getElementById('widthdraw-btn').addEventListener('click', function(e){
    e.preventDefault()
   
    const amount = getInputValueNumber('widthdraw-amount');
    

   const availableBalace = getInnerText('available-balace')
  
    const totalNewAvailableBalace = availableBalace - amount
    console.log(totalNewAvailableBalace);

    
    setInnertext(totalNewAvailableBalace)

    
   const data = {
    name: 'cash out money',
    date: new Date().toLocaleTimeString()
   }

   transactionData.push(data)
   console.log(transactionData);
})




// trogling feature


document.getElementById('add-button').addEventListener('click', function(){
 
    handleToggle('add-money-parent')

    handleButtonToggle('add-button')
})



document.getElementById('cashout-button').addEventListener('click', function(){
    handleToggle('cash-out-parent')

    handleButtonToggle('cashout-button')
  
})

document.getElementById('transfer-money').addEventListener('click', function(){
    handleToggle('trasfer-money-parent')
    handleButtonToggle('transfer-money')
})

document.getElementById('bonus-button').addEventListener('click', function(){
   
   handleToggle('get-bonus-parent')
   handleButtonToggle('bonus-button')
})
document.getElementById('bil-button').addEventListener('click', function(){
   
   handleToggle('pay-bil-parent')
   handleButtonToggle('bil-button')
})
document.getElementById('transaction-button').addEventListener('click', function(){
   
   handleToggle('transaction-parent')
   handleButtonToggle('transaction-button')
})

// document.getElementById('bonus-button').addEventListener('click', function(){
//     const forms = document.getElementsByClassName('form')
//     console.log(forms);
   
//    for(const form of forms){
//        form.style.display  = 'none'
//    }
//    document.getElementById('get-bonus-parent').style.display = 'block'

// })