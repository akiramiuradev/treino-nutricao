const form = document.getElementById('form-anamnese');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const paciente = pegarDadosForm(); 

    if (!validarPaciente(paciente)) {
        alert('Por favor, preencha todos os caampos.');
        return;
    }

    console.log('Paciente cadastrado:', paciente);
    
    const imc = calcularIMC(paciente.peso, paciente.altura);
    const tmb = calcularTMB(paciente.peso, paciente.altura, paciente.idade);

    mostrarResultados(imc, tmb);

    form.reset();
})