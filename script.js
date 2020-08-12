
let pinMatched = document.getElementById('pin-matched');
pinMatched.style.display = 'none';
let missMatched = document.getElementById('miss-matched');
missMatched.style.display = 'none';  
let sorryText = document.getElementById('sorry-msg');
sorryText.style.display = 'none';

// -----Pin Generate Section----- //

const pinGenerate = document.getElementById('pin-generate');
  pinGenerate.addEventListener('click', function(){
const randomPinNum = Math.round(1000 + Math.random() * 9000);
  document.getElementById('generate-pin-display').value = randomPinNum;

  pinMatched.style.display = 'none';
  missMatched.style.display = 'none';      
})


//-----Input Matching Number Section---- //

const inputDisplay = document.getElementById('input-display');
function btnValue(num) {
switch (num) {
    case 'c':
        inputDisplay.value = "";  
        break;
    case '<':
        inputDisplay.value = inputDisplay.value.substr(0, inputDisplay.value.length - 1); 
        break;
    default:
        inputDisplay.value += num;
        break;
}
}
document.getElementById('input-display').value = "";

// -----Submit Section----- //
const submitBtn = document.getElementById('submit-button');
  submitBtn.addEventListener('click', function(){
const pinInputDisplay = document.getElementById('generate-pin-display').value;
const generateDisplay = document.getElementById('input-display').value; 
if (pinInputDisplay === generateDisplay){ 
    pinMatched.style.display = 'block';
    
    document.getElementById('generate-pin-display').value = "";
    document.getElementById('input-display').value = "";
}
else{
    missMatched.style.display = 'block';

    document.getElementById('generate-pin-display').value = "";
    document.getElementById('input-display').value = ""; 
}

// Set limit for 3 try left
const tryLeft = document.getElementById('try-left');
const tryLeftCount = parseInt(tryLeft.innerText);
const newTryLeft = tryLeftCount - 1;

if(tryLeftCount > 0 && pinInputDisplay != generateDisplay){
    tryLeft.innerText = newTryLeft; 
}
if(tryLeftCount == 0 && pinInputDisplay != generateDisplay){
    let mainBody = document.getElementById('main-body');
    mainBody.style.display = 'none';
    pinMatched.style.display = 'none';
    missMatched.style.display = 'none';
    sorryText.style.display = 'block';
}

})
