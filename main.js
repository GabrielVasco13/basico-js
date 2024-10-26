function buttonClick() {
    const peso = Number(prompt("Ei, qual é o peso?"));
    const altura = Number(prompt("Ei, qual é a sua altura?"));
    if (peso === 0 || altura === 0) {
        alert("Peso ou altura não podem ser 0");
        return;
    }
    let imc = peso / (altura * altura);

    switch (imc) {
        case imc < 18.5:
            document.querySelector('#aviso').innerHTML = "Abaixo do peso";
            break;
        case imc >= 18.5 && imc <= 24.9:
            document.querySelector('#aviso').innerHTML = "Peso normal";
            break;
        case imc >= 25 && imc <= 29.9:
            document.querySelector('#aviso').innerHTML = "Acima do peso";
            break;
    }
    document.querySelector('#nome').innerHTML = imc.toFixed(2);
}