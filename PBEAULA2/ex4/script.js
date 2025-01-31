function verificarPrimos(n) {
    let primos = [];
    let divisões = 0;

    for (let i = 2; i <= n; i++) {
        let isPrimo = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            divisões++;
            if (i % j === 0) {
                isPrimo = false;
                break;
            }
        }

        if (isPrimo) {
            primos.push(i);
        }
    }

    return { primos, divisões };
}

document.getElementById('primeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const n = parseInt(document.getElementById('number').value);
    const resultElement = document.getElementById('result');
    const divisionsCountElement = document.getElementById('divisionsCount');

    const resultado = verificarPrimos(n);

    if (resultado.primos.length > 0) {
        resultElement.textContent = `Números primos entre 1 e ${n}: ${resultado.primos.join(', ')}`;
    } else {
        resultElement.textContent = `Não há números primos entre 1 e ${n}.`;
    }

    divisionsCountElement.textContent = `Número de divisões executadas: ${resultado.divisões}`;
});
