document.addEventListener("DOMContentLoaded", () => {


// ===============================
// PRENOTAZIONE WHATSAPP
// ===============================


const form = document.getElementById("bookingForm");


if(form){

form.addEventListener("submit", function(e){

e.preventDefault();


const nome = document.getElementById("nome").value;

const telefono = document.getElementById("telefono").value;

const data = document.getElementById("data").value;

const passeggeri = document.getElementById("passeggeri").value;

const partenza = document.getElementById("partenza").value;

const destinazione = document.getElementById("destinazione").value;

const note = document.getElementById("note").value;



const messaggio = `

Buongiorno Cooperativa Taxi Lecce,

vorrei richiedere una prenotazione.

Nome e Cognome:
${nome}

Telefono:
${telefono}

Data e ora:
${data}

Passeggeri:
${passeggeri}

Partenza:
${partenza}

Destinazione:
${destinazione}

Note:
${note || "Nessuna"}

Grazie.

`;



const numeroWhatsApp = "393286714428";


const url = 
"https://wa.me/" 
+ numeroWhatsApp 
+ "?text=" 
+ encodeURIComponent(messaggio);



window.open(url, "_blank");


});

}






// ===============================
// ANIMAZIONI SCROLL
// ===============================


const elements = document.querySelectorAll(
".intro, .booking, .service-grid article, .transfer-banner, .numbers div"
);



elements.forEach(element => {

element.classList.add("hidden");

});



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

observer.unobserve(entry.target);

}


});


},{
threshold:0.15
});



elements.forEach(element=>{

observer.observe(element);

});








// ===============================
// NAVBAR CAMBIO COLORE SCROLL
// ===============================


const nav = document.querySelector("nav");


window.addEventListener("scroll", ()=>{


if(window.scrollY > 80){

nav.style.background =
"rgba(11,11,11,0.92)";

nav.style.backdropFilter =
"blur(15px)";


}else{


nav.style.background =
"transparent";


}


});








// ===============================
// SCROLL FLUIDO LINK INTERNI
// ===============================


document.querySelectorAll('a[href^="#"]')
.forEach(link=>{


link.addEventListener("click", function(e){


const target =
document.querySelector(
this.getAttribute("href")
);


if(target){

e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});








// ===============================
// ANNO AUTOMATICO FOOTER
// ===============================


const year = document.querySelector(".year");


if(year){

year.textContent = new Date().getFullYear();

}



});
