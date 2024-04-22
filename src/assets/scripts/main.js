/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */


document.addEventListener('DOMContentLoaded', function() {
  var myCarousel = document.querySelector('#VallGallinera__Galeria__slider');
  console.log(myCarousel); // Debería mostrar el elemento del DOM si se encuentra correctamente
  var carousel = new bootstrap.Carousel(myCarousel);
});

document.addEventListener('DOMContentLoaded', function () {
  const myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
  });
  myModal.show(); // Mostrar el modal automáticamente
});

document.addEventListener('DOMContentLoaded', function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var myCarouselElement = document.querySelector('#VallGallinera__Galeria__slider');
  console.log(myCarouselElement); // Verifica que se capture el elemento del DOM correctamente

  if (myCarouselElement) {
    var carousel = new bootstrap.Carousel(myCarouselElement);
    console.log('Carrusel inicializado:', carousel);
  } else {
    console.log('El elemento del carrusel no fue encontrado');
  }
});


//Boto Alert


var submitButton = document.getElementById('boto-Formulari');
submitButton.addEventListener('click', function(event) {
  
  event.preventDefault(); // Evita la recarga de la página o el envío de un formulario real.

  var alertElement = document.getElementById('alert-Formulari');
  alertElement.classList.remove('d-none'); // Elimina la clase 'd-none' para mostrar el alert.
  alertElement.classList.add('show'); // Asegúrate de que la clase 'show' está presente.

  // Establece un temporizador para ocultar el alert después de 10 segundos.
  setTimeout(function() {
    alertElement.classList.remove('show'); // Oculta el alert
    alertElement.classList.add('d-none'); // Vuelve a ocultar el alert completamente
  }, 2000) 
});








$(document).ready(function() {
  
  function updateButtonState() {
    let isValid = true;
    
    $('input[required]').each(function() {
      if (!this.checkValidity()) isValid = false;
    });

    let submitButton = $('#submit-button');
    if (isValid) {
      submitButton.removeClass('btn-secondary').addClass('btn-primary');
      submitButton.prop('disabled', false); // Habilita el botón
    } else {
      submitButton.removeClass('btn-primary').addClass('btn-secondary');
      submitButton.prop('disabled', true); // Deshabilita el botón
    }
  }

  
  $('input[required]').on('change input', function() {
    updateButtonState();
  });

  // Inicializar el estado del botón al cargar la página
  updateButtonState();
});


