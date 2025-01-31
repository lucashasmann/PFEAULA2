function verificarPrimo(numero) {
    let divisores = [];
    if (numero <= 1) {
        return { isPrime: false, divisors: [] };
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            divisores.push(i); 
            if (i !== numero / i) {
                divisores.push(numero / i); 
            }
        }
    }

    if (divisores.length === 0) {
        return { isPrime: true, divisors: [] }; 
    } else {
        return { isPrime: false, divisors: divisores.sort((a, b) => a - b) }; 
    }
}


document.getElementById('primeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numero = parseInt(document.getElementById('number').value);
    const resultElement = document.getElementById('result');
    
   
    const resultado = verificarPrimo(numero);

    if (resultado.isPrime) {
        resultElement.textContent = `O número ${numero} é primo!`;
        resultElement.className = 'result-valid';
    } else {
        resultElement.textContent = `O número ${numero} não é primo. Ele é divisível por: ${resultado.divisors.join(', ')}.`;
        resultElement.className = 'result-invalid';
    }
});
