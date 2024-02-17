const showMoreParagraph = document.querySelector(".show-more");
const extraContent = document.querySelector(".extra");

// Adăugați un eveniment de click pe paragraf pentru a afișa conținutul suplimentar
showMoreParagraph.addEventListener("click", function () {
  // Afișăm conținutul suplimentar
  extraContent.style.display = "block";
  // Ascundem paragraful "Mai multe detalii" după ce a fost apăsat
  showMoreParagraph.style.display = "none";
});
