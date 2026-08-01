document.addEventListener("DOMContentLoaded", () => {


// =================================
// PRENOTAZIONE WHATSAPP
// =================================


const forms = document.querySelectorAll("#bookingForm");


forms.forEach(form => {


form.addEventListener("submit", function(e){

e.preventDefault();


const nome = document.getElementById("nome")?.value || "";

const telefono = document.getElementById("telefono")?.value || "";

const data = document.getElementById("data")?.value || "";

const passeggeri = document.getElementById("passeggeri")?.value || "";

const partenza = document.getElementById("partenza")?.value || "";

const destinazione = document.getElementById("destinazione")?.value || "";

const note = document.getElementById("note")?.value || "Nessuna";



const messaggio = 
`Buongiorno Cooperativa Taxi Lecce,

vorrei prenotare una corsa.

Nome:
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
${note}

Grazie.`;



const numero = "393286714428";


const whatsappURL =
"https://wa.me/" 
+ numero 
+ "?text=" 
+ encodeURIComponent(messaggio);



window.open(whatsappURL, "_blank");


});


});








// =================================
// PULSANTE WHATSAPP FISSO
// =================================


const whatsappButton = document.createElement("a");


whatsappButton.href =
"https://wa.me/393286714428";


whatsappButton.target="_blank";


whatsappButton.className =
"floating-whatsapp";


whatsappButton.innerHTML =
"WhatsApp";



document.body.appendChild(whatsappButton);








// =================================
// NAVBAR SCROLL
// =================================


const nav = document.querySelector("nav");


window.addEventListener("scroll",()=>{


if(!nav) return;


if(window.scrollY > 60){


nav.classList.add("nav-scroll");


}else{


nav.classList.remove("nav-scroll");


}


});








// =================================
// ANIMAZIONI
// =================================


const animatedElements =
document.querySelectorAll(
".intro, .booking, .service-grid article, .service-list article, .airport-card, .destinations article, .values-company div"
);



animatedElements.forEach(el=>{

el.classList.add("reveal");

});



const observer = new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("active");

observer.unobserve(entry.target);

}


});


},{
threshold:.15
});



animatedElements.forEach(el=>{

observer.observe(el);

});








// =================================
// ANNO FOOTER
// =================================


const year =
document.querySelector(".year");


if(year){

year.textContent =
new Date().getFullYear();

}


});
