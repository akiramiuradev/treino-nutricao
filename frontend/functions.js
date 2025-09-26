function pegarDadosForm() {
    const nome = document.getElementById('nome').value.trim();
    const idade = parseInt(document.getElementById('idade').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    return {nome, idade, peso, altura};
}

function validarPaciente(paciente) {
    return paciente.nome && paciente.idade && paciente.peso && paciente.altura;
}

function calcularIMC(peso, altura) {
    const alturaEmMetros = altura / 100;
    return peso / (alturaEmMetros * alturaEmMetros);
}

function calcularTMB(peso, altura, idade) {
    return (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
}

function mostrarResultados(imc, tmb) {
    document.getElementById('imc').textContent = `Seu IMC: ${imc.toFixed(2)}`;
    document.getElementById('tmb').textContent = `Seu Gasto calórico (TMB): ${tmb.toFixed(0)} kcal`;
}