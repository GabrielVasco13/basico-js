function buttonClick() {
    const texto = document.querySelector('#media');
    const primeira_nota = Number(prompt("Digite a sua primeira nota!"));
    const segunda_nota = Number(prompt("Digite a sua segunda nota!"));

    // verificando se a nota é 0
    if (primeira_nota == 0 || segunda_nota == 0) {
        alert("0 não é um valor válido!");
        return;
    }

    if (primeira_nota > 10 || segunda_nota > 10) {
        alert("A nota máxima só vai até 10!");
        return;
    }

    const calculo = (primeira_nota + segunda_nota) / 2;

    texto.innerHTML = `A média é: ${calculo}`;
}