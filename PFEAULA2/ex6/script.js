function perguntarIdades() {
    let numPessoas = document.getElementById('numPessoas').value;
    if (numPessoas <= 0) {
        alert("Por favor, insira um número válido.");
        return;
    }

    let idadeInputsDiv = document.getElementById('idadeInputs');
    idadeInputsDiv.innerHTML = "Digite as idades das pessoas:";

    for (let i = 0; i < numPessoas; i++) {
        idadeInputsDiv.innerHTML += `<input type="number" id="idade${i}" placeholder="Idade ${i + 1}" min="0"><br>`;
    }

    idadeInputsDiv.style.display = "block";
    let button = document.createElement('button');
    button.innerText = "Calcular Média";
    button.onclick = calcularMedia;
    idadeInputsDiv.appendChild(button);
}

function calcularMedia() {
    let numPessoas = document.getElementById('numPessoas').value;
    let somaIdades = 0;

    for (let i = 0; i < numPessoas; i++) {
        let idade = document.getElementById('idade' + i).value;
        if (idade) {
            somaIdades += parseInt(idade);
        } else {
            alert("Por favor, preencha todas as idades.");
            return;
        }
    }

    let media = somaIdades / numPessoas;
    let resultadoDiv = document.getElementById('resultado');

    if (media >= 0 && media <= 25) {
        resultadoDiv.innerHTML = `A média de idade é ${media.toFixed(2)}. A turma é jovem.`;
    } else if (media >= 26 && media <= 60) {
        resultadoDiv.innerHTML = `A média de idade é ${media.toFixed(2)}. A turma é adulta.`;
    } else {
        resultadoDiv.innerHTML = `A média de idade é ${media.toFixed(2)}. A turma é idosa.`;
    }
}
