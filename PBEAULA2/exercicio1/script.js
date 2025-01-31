function validarNumero() {
    const numero = document.getElementById('numero').value;
    const mensagem = document.getElementById('mensagem');

    if (numero === "") {
        mensagem.textContent = "Por favor, insira um número.";
    } else {
        const num = parseInt(numero);

        if (num >= 0 && num <= 1000) {
            mensagem.textContent = "Número válido!";
        } else {
            mensagem.textContent = "O número deve estar entre 0 e 1000.";
        }
    }
}
