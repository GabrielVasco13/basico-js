function somaValores() {
    const valor1 = prompt('Digite o primeiro valor a ser somado');

    if (valor1 == null || valor1 == 0) {
        alert('Operação cancelada');
        return;
    }

    const valor2 = prompt('Digite o segundo valor a ser somado');

    if (valor2 == null || valor2 == 0) {
        alert('Operação cancelada');
        return;
    }

    const resultado = Number(valor1) + Number(valor2);
    document.querySelector('#calculo').innerHTML = resultado;
}