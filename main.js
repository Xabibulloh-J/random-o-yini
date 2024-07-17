// RANDOM O'YINI
var elForm = document.querySelector(".js-form");
var elRandomInput = elForm.querySelector(".js-input");
var elButton = elForm.querySelector(".js-btn");
var elRandomDesc = document.querySelector(".js-random-desc");
var elRandomErrorDesc = document.querySelector(".js-random-error-desc");
var elRefresh = document.querySelector(".js-refresh");
var randomNumber = Math.round(Math.random() * 100) + 1;
var userAttempt = 6;

function checkUserInput(evt) {
   evt.preventDefault();
   
   if (elRandomInput.value == randomNumber) {
      elRandomDesc.textContent = "Urra, to'g'ri topdingiz";
      elRandomErrorDesc.textContent = "";
      elRandomInput.disabled = true;
      elButton.disabled = true;
      elRefresh.textContent = "Yana o'ynab ko'ring"
   }
   
   if (elRandomInput.value < randomNumber) {
      elRandomErrorDesc.textContent = "Siz bergan son kichiklik qilyapti!";
      elRandomDesc.textContent = "";
   } 
   
   if(elRandomInput.value > randomNumber) {
      elRandomErrorDesc.textContent = "Siz bergan son kattalik qilyapti!";
      elRandomDesc.textContent = "";
   };
   
   userAttempt--;
   
   if (userAttempt == 0) {
      elRandomErrorDesc.textContent = `Afsuski imkoniyatlaringiz tugadi. Topa olmagan soningiz ${randomNumber} edi.`;
      elRandomInput.disabled = true;
      elButton.disabled = true;
      elRefresh.textContent = "Yana urunib ko'ring";
   };
};

elForm.addEventListener("submit", checkUserInput);