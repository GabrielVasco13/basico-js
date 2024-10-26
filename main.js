function buttonClick() {
    const numeroElement = document.querySelector('#numero');
    let numero = Number(numeroElement.textContent);
    numero++;
    numeroElement.textContent = numero;
}