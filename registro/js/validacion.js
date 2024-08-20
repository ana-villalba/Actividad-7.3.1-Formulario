function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}



function comparacionContrasena(password1, password2) {
    return password1 === password2;
}

function verificarContrasena() {
    let password1input = document.getElementById("password1").value;
    let password2input = document.getElementById("password2").value;

    if (comparacionContrasena(password1input, password2input)) {
        alert("Las contraseñas coinciden");
    } else {
        alert("Las contraseñas no coinciden");
    }
}
if(pasword.length <6) {
    errorMessage.textContent = "La contraseña debe tener al menos 6 caracteres.";
    return;
}
function validarCheckBox() {
    let terminos = document.querySelector("#terminos");
    if (terminos.checked) {
    return true;
    } else {
    return false;
}
}

document.getElementById("regBtn").addEventListener("click", function() {
    verificarContrasena();
      if (validarContrasena() && validarCheckBox()) {
        verificarContrasena();
    } else {
        if (!validarCheckBox()) {
            alert("Debe aceptar los términos y condiciones.");
        }
    }
});


