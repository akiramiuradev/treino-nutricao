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
    
    const classificacao = classificarIMC(imc);
    const recomendacao = recomendarPorIMC(classificacao);

    const fatorAtividade = parseFloat(document.getElementById('atividade').value);
    const tdee = calcularTDEE(tmb, fatorAtividade);

    const plano = recomendarPlano(tdee, classificacao);
    

    mostrarResultados(imc, tmb);
    mostrarRecomendacao(classificacao, recomendacao);
    mostrarTDEE(tdee);
    mostrarPlano(plano);

    paciente.imc = imc;
    paciente.tmb = tmb;
    paciente.tdee = tdee;
    paciente.classificacao = classificacao;
    paciente.recomendacao = recomendacao;
    paciente.plano = plano;

    pacientes.push(paciente);

    localStorage.setItem('pacientes', JSON.stringify(pacientes));

    atualizarListaPacientes();

    form.reset();
})

document.addEventListener('DOMContentLoaded', atualizarListaPacientes);