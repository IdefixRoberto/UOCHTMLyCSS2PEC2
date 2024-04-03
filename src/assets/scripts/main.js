/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();


const nomInput = document.getElementById("nom");
const telefonInput = document.getElementById("telefon");
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("submit-btn");
const errorNom = document.getElementById("error-nom");
const errorTelefon = document.getElementById("error-telefon");
const errorEmail = document.getElementById("error-email");
const amagarFormulari = document.getElementById("amagar");
const homeFormulari = document.getElementById("home-g");
const missatgeEnviat = document.getElementById("form-Wiew")



const validarNom = (nombre) => {
    return nombre.length >= 5;
};

const validarTelefon = (telefon) => {
    const regex = /^\d{9}$/;
    return regex.test(telefon);
};

const validarEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};
  

const mostrarError = (input, mensaje, corregir) => {
    input.textContent = mensaje;
    input.classList.add("error");
    corregir.classList.add("errorInput");
};

const ocultarError = (input, corregir) => {
    input.textContent = "";
    input.classList.remove("error");
    corregir.classList.remove("errorInput");
};

const actualizarBoton = () => {
    submitButton.disabled = !(validarNom(nomInput.value) && validarTelefon(telefonInput.value) && validarEmail(emailInput.value));
};



submitButton.addEventListener("click", () => {

    missatgeEnviat.classList.add("opacity");
    missatgeEnviat.classList.remove("Noopacity");
    setTimeout(function() {
        missatgeEnviat.classList.add("Noopacity");
        missatgeEnviat.classList.remove("opacity");
      }, 5000);

});

nomInput.addEventListener("input", () => {
    actualizarBoton();
    if (validarNom(nomInput.value)) {
        ocultarError(errorNom, nomInput);
    } else {
        mostrarError(errorNom, "El nom deu contenir com a minim 5 caràcters", nomInput);
    }

});

telefonInput.addEventListener("input", () => {
    actualizarBoton();
    if (validarTelefon(telefonInput.value)) {
        console.log("Hola")
        ocultarError(errorTelefon, telefonInput);
    } else {
        mostrarError(errorTelefon, "El teléfon no te un format vàlit", telefonInput);
    }

});

emailInput.addEventListener("input", () => {
    actualizarBoton();
    if (validarEmail(emailInput.value)) {
        ocultarError(errorEmail, emailInput);
        
    } else {
        mostrarError(errorEmail, "El email no te un format vàlit", emailInput);
    }
    
});


function amagar() { 


    if(amagarFormulari.textContent=="Subscriures"){
        homeFormulari.classList.remove("dissableForm")
    amagarFormulari.textContent = "Amagar Formulari";

    amagarFormulari.classList.remove("amagar");
    amagarFormulari.classList.add("amagar2");
        }

        else{
            amagarFormulari.textContent = "Subscriures";
            homeFormulari.classList.add("dissableForm");
            amagarFormulari.classList.remove("amagar");
            amagarFormulari.classList.add("amagar2")
        }

}

amagarFormulari.addEventListener("click", () =>{
    amagar()
})
