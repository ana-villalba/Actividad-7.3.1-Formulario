function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function validarCheckBox() {
    let terminos = document.querySelector("#terminos");
    if (terminos.checked) {
    return true;
    } else {
    return false;
}
}