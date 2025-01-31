function calcularMedia() {
    const notasInput = document.getElementById("notas").value;
    const notas = notasInput.split(",").map(nota => parseFloat(nota.trim()));

    const soma = notas.reduce((acc, curr) => acc + curr, 0);
    const media = soma / notas.length;

    document.getElementById("resultado").innerText = `A média das notas é: ${media.toFixed(2)}`;
}
