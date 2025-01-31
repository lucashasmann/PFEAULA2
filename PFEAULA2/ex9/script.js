function mostrarDia() {
    let numero = parseInt(document.getElementById('numero').value);
    let resultadoDiv = document.getElementById('resultado');

    switch (numero) {
        case 1:
            resultadoDiv.innerHTML = "Domingo";
            break;
        case 2:
            resultadoDiv.innerHTML = "Segunda-feira";
            break;
        case 3:
            resultadoDiv.innerHTML = "Terça-feira";
            break;
        case 4:
            resultadoDiv.innerHTML = "Quarta-feira";
            break;
        case 5:
            resultadoDiv.innerHTML = "Quinta-feira";
            break;
        case 6:
            resultadoDiv.innerHTML = "Sexta-feira";
            break;
        case 7:
            resultadoDiv.innerHTML = "Sábado";
            break;
        default:
            resultadoDiv.innerHTML = "Valor inválido!";
            break;
    }
}
