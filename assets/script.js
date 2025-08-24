// login button functionality 

document.getElementById('loginButton')
.addEventListener('click', function(e){
    e.preventDefault();
   const mobileNumber = 177424725202;
   const pinNumber = 1234
   const mobileNumberValue = document.getElementById('mobile-number').value
   const mobileNumberValueConverted = parseInt(mobileNumberValue)

   const pinNumberValue = document.getElementById('pin-number').value
   const pinNumberValueConverted = parseInt(pinNumberValue)
   console.log(mobileNumberValueConverted)
   console.log(pinNumberValueConverted)

   if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
    
    window.location.href='./home.html'
   }
   else{
    console.log('Invalid credential');
   }
})

