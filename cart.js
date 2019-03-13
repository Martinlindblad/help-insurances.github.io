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



let bean = document.getElementsByClassName("showBean")
let buzz = document.getElementsByClassName("showBuzz")
let jack = document.getElementsByClassName("showJack")
let jedi = document.getElementsByClassName("showJedi")
let hulk = document.getElementsByClassName("showHulk")
let ring = document.getElementsByClassName("showRing")
function retriveInsurance() { // en funktion som tar emot värdet från local storage och bestämmer vilken försäkring som skall visas
  let retrivedInsurance = JSON.parse(localStorage.getItem('insurance:insurance_number'));
  switch(retrivedInsurance){
    case 1: bean[0].style.display = "block"; break;
    case 2: buzz[0].style.display = "block"; break;
    case 3: jack[0].style.display = "block"; break;
    case 4: jedi[0].style.display = "block"; break;
    case 5: hulk[0].style.display = "block"; break;
    case 6: ring[0].style.display = "block"; break;
  }

}

// _____________________Remove Button_________________
function removeInsurance() {            // funktion som tar bort den valda försäkringen
  bean[0].style.display = "none";
  buzz[0].style.display = "none";
  jack[0].style.display = "none";
  jedi[0].style.display = "none";
  hulk[0].style.display = "none";
  ring[0].style.display = "none";
}
document.getElementById("removeInsurance").addEventListener("click", removeInsurance)
// binder funktionen till knappen "remove"


