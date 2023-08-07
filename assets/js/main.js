/* Popup */
document.getElementById("formulaires").addEventListener("submit",
function(even){
    event.preventDefault();

    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if(nom && email && message){
        document.getElementById("formulaires").style.display = "none";

        document.getElementById("popup").style.display = "block";
    }
});

/* Effet scroll */
document.addEventListener("DOMContentLoaded", function() {
    const elementToAnimate = document.querySelector(".ligne");
       elementToAnimate.style.opacity = "1";
       elementToAnimate.style.transform = "translateY(0)";
    });

// fade in texte titre et illustration et images

function animateElements() {
    const elementsToAnimate = document.querySelectorAll(".transition, .scale, .personne1, .personne2, .personne3, .personne4, .personne5, .img-tchalla");
  
    elementsToAnimate.forEach(function(element) {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight - 100) {
        element.classList.add("show");
      }
    });
  }
  
  // Appel de la fonction lors du chargement initial
  document.addEventListener("DOMContentLoaded", animateElements);
  
  // Ajout d'un écouteur d'événement scroll pour appeler la fonction lors du défilement
  window.addEventListener("scroll", animateElements);
  
  // Fonction pour gérer le retrait des éléments avant de changer de page
  function animateRetreat() {
    const elementsToAnimate = document.querySelectorAll(".transition, .scale, .personne1, .personne2, .personne3, .personne4, .personne5, .img-tchalla");
  
    elementsToAnimate.forEach(function(element) {
      element.classList.remove("show");
    });
  }
  
  // Ajout d'un écouteur d'événement beforeunload pour appeler la fonction lors du changement de page
  window.addEventListener("beforeunload", animateRetreat);
