var btnPopup = document.getElementById('Btnpopup'); // récupère l'id du bouton btnPopup.
var overlay = document.getElementById('overlay'); // récupère l'id de l'élément overlay
btnPopup.onclick= openModal; // rècupère l'événement clic sur le bouton btnPopup et déclenche la fonction openModal.
function openModal() {
overlay.style.display='block'; // définition de la fonction qui affiche la popup en le rendant visible.
}


var btnClose=document.getElementById('btnClose'); // Récupérer l'id de l'élément btnClose.

btnClose.onclick = closeModal ; //récupèrer l'évenement clic et déclenche la fonction closeModal

function closeModal(){
    overlay.style.display='none' // définit la fonction qui ferme la popup en rendant invisible l'élément overlay;
}