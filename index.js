
let navBtn = document.getElementsByClassName("nav-btn")
let mobileNav = document.getElementsByClassName("header-container")
// ____________Burger function______________

  function burgerFunction(x) {
    x.classList.toggle("change");
}

// ____________Burger OpenClose_____________
// Gömmer och visar anchors
function openClose(){
    let x = document.getElementById("links")    
    if(x.style.display === "block"){
        x.style.display = "none";
    }else{
        x.style.display = "block"
    }
}
// Gömmer och visar anchors
function openCloseTwo(){
    let x = document.getElementById("links")    
    if(x.style.display === "block"){
      x.style.opacity = "1"
    }else{
      x.style.opacity = "0"
    }
}

// _____________________Burger DropDown_______________
// Gör så att hamburger menyns bakgrund visas till 100% vid klick

function dropDown(){
    let d = document.getElementById("links")    
    if(d.style.display === "block"){
        mobileNav[0].style.paddingBottom = "100%";
        navBtn[0].style.transitionDelay = "0.3s";
    }else{
        mobileNav[0].style.paddingBottom = "0%";
        navBtn[0].style.transitionDelay = "0s";
    
    }
}




// ______________________FIRE EVENT + Prevent Scroll Hamburger___________________
// En funktion som skjuter iväg funktioner i hjälp av en eventlistner
// Funktionen fick även se till att sidan inte går att scrolla när hamburger menyn öppnas

document.getElementById("burger").addEventListener("click", function(){
    openClose();
    openCloseTwo();
    burgerFunction(this);
    dropDown();
    let d = document.getElementById("links")    
    if(d.style.display === "block"){
        document.body.style.overflowY = "hidden";
    }else{
        document.body.style.overflowY = "scroll";
    }
})

// https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage 

// ___________________SLIDERS_____________________

var slider1 = document.getElementById("myRange1");
var slider2 = document.getElementById("myRange2");
var slider3 = document.getElementById("myRange3");
var slider4 = document.getElementById("myRange4");
var slider5 = document.getElementById("myRange5");
var slider6 = document.getElementById("myRange6");
var output = document.getElementById("danger-level");
output.innerHTML = Math.round(((parseInt(slider1.value) + parseInt(slider2.value) + 
parseInt(slider3.value) + parseInt(slider4.value) + parseInt(slider5.value) + 
parseInt(slider6.value)) / 6)); 
// Visar standard värdet på slidern


// Uppdaterar det nuvarade värdet på slidern (Varje gång du drar i slidern)
function sliderValue() {
  output.innerHTML = Math.round(((parseInt(slider1.value) + parseInt(slider2.value) + 
  parseInt(slider3.value) + parseInt(slider4.value) + parseInt(slider5.value) + 
  parseInt(slider6.value)) / 6))
  
  dealSwitch();
}

slider1.onchange = sliderValue; 
slider2.onchange = sliderValue; 
slider3.onchange = sliderValue; 
slider4.onchange = sliderValue; 
slider5.onchange = sliderValue; 
slider6.onchange = sliderValue; 


// // _____________________DEAL SWITCH____________________
// hämtar css för 3 olika class
let dealOne = document.getElementsByClassName("deal-one");
let dealTwo = document.getElementsByClassName("deal-two");
let dealThree = document.getElementsByClassName("deal-three");
// en funktion som hämtar det nya värdet angett på "danger-deal"-span och sen avgör vilken "deal" class som som skall visas
function dealSwitch() {
  const outputValue = output.innerHTML;
  parseInt(outputValue);
  if(outputValue >= 0 && outputValue <= 3){
    dealOne[0].style.display = "block";
    dealOne[1].style.display = "block";
  }else{
    dealOne[0].style.display = "none";
    dealOne[1].style.display = "none";
  }
  if(outputValue >= 4 && outputValue <= 6){
    dealTwo[0].style.display = "block";
    dealTwo[1].style.display = "block";
  }else{
    dealTwo[0].style.display = "none";
    dealTwo[1].style.display = "none";
  }
  if(outputValue >= 7 && outputValue <= 10){
    dealThree[0].style.display = "block";
    dealThree[1].style.display = "block";
  }else{
    dealThree[0].style.display = "none";
    dealThree[1].style.display = "none";
  }
}

// ___________________INSURANCE NUMBER______________________
// Funktioner som skickar ett värde till Local storage när den blir kallad
function buttonValueOne() {
  window.localStorage.setItem('insurance:insurance_number', JSON.stringify(1));
} 
function buttonValueTwo() {
  window.localStorage.setItem('insurance:insurance_number', JSON.stringify(2));
} 
function buttonValueThree() {
  window.localStorage.setItem('insurance:insurance_number', JSON.stringify(3));
} 
function buttonValueFour() {
  window.localStorage.setItem('insurance:insurance_number', JSON.stringify(4));
} 
function buttonValueFive() {
  window.localStorage.setItem('insurance:insurance_number', JSON.stringify(5));
} 
function buttonValueSix() {
  window.localStorage.setItem('insurance:insurance_number', JSON.stringify(6));
} 
// Funktionerna kallas i hjälp av eventlistners som är kopplade till buttons 

document.getElementById("buttonValueOne").addEventListener("click", buttonValueOne);
document.getElementById("buttonValueTwo").addEventListener("click", buttonValueTwo);
document.getElementById("buttonValueThree").addEventListener("click", buttonValueThree);
document.getElementById("buttonValueFour").addEventListener("click", buttonValueFour);
document.getElementById("buttonValueFive").addEventListener("click", buttonValueFive);
document.getElementById("buttonValueSix").addEventListener("click", buttonValueSix);

// ____________________________________-


//