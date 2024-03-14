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
const submitButton = document.querySelector("button");

const validarNom = (nombr) => {
  if (nombre.length < 5) {
    return false;
  }
  return true;
};

const validarTelefon = (telefon) => {
  const regex = /^\d{9}$/;
  return regex.test(telefon);
};

const validarEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

const mostrarError = (input, mensaje) => {
  const errorElement = input.parentNode.querySelector(".error-" + input.id);
  errorElement.textContent = mensaje;
  input.classList.add("error");
};

const ocultarError = (input) => {
  const errorElement = input.parentNode.querySelector(".error-" + input.id);
  errorElement.textContent = "";
  input.classList.remove("error");
};

const actualizarBoton = () => {
  if (nombreInput.value && telefonInput.value && emailInput.value) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};

nombreInput.addEventListener("input", () => {
  if (validarNom(nomInput.value)) {
    ocultarError(nomInput);
  } else {
    mostrarError(nomInput, "El nombre debe tener al menos 5 caracteres");
  }
  actualizarBoton();
});

telefonoInput.addEventListener("input", () => {
  if (validarTelefono(telefonInput.value)) {
    ocultarError(telefonInput);
  } else {
    mostrarError(telefonInput, "El teléfono no tiene un formato válido");
  }
  actualizarBoton();
});

emailInput.addEventListener("input", () => {
  if (validarEmail(emailInput.value)) {
    ocultarError(emailInput);
  } else {
    mostrarError(emailInput, "El email no tiene un formato válido");
  }
  actualizarBoton();
});

