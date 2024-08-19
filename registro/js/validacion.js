function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

if(pasword.length <6) {
    errorMessage.textContent = "La contraseña debe tener al menos 6 caracteres.";
    return;
}