function verificarPrimo(numero) {
    if (numero <= 1) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}


document.getElementById('primeForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const numero = parseInt(document.getElementById('number').value);
    const resultElement = document.getElementById('result');
    

    if (verificarPrimo(numero)) {
        resultElement.textContent = `O número ${numero} é primo!`;
        resultElement.className = 'result-valid';
    } else {
        resultElement.textContent = `O número ${numero} não é primo.`;
        resultElement.className = 'result-invalid';
    }
});
