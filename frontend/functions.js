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

function mostrarRecomendacao(classificacao, recomendacao) {
    document.getElementById('classificacao').textContent = `Classificação: ${classificacao}`;
    document.getElementById('recomendacao').textContent = recomendacao;
}

function classificarIMC(imc) {
    if (imc < 16) return 'Magreza grave';
    if (imc < 17) return 'Magreza moderada';
    if (imc < 18.5) return 'Magreza leve';
    if (imc < 25) return 'Peso normal';
    if (imc < 30) return 'Sobrepeso';
    if (imc < 35) return 'Obesidade grau I';
    if (imc < 40) return 'Obesidade grau II';
    return 'Obesidade grau III';
}

function recomendarPorIMC(classificacao) {
    switch(classificacao) {
        case 'Magreza grave':
        case 'Magreza moderada':
        case 'Magreza leve':
            return 'Aumente a ingestão calórica e priorize treino de força para ganhar massa muscular.';
        case 'Peso normal':
            return 'Mantenha alimentação equilibrada e rotina de exercícios variados.';
        case 'Sobrepeso':
            return 'Reduza calorias gradualmente, pratique exercícios aeróbicos e treino de força.';
        case 'Obesidade grau I':
        case 'Obesidade grau II':
        case 'Obesidade grau III':
            return 'Procure acompanhamento nutricional e médico. Priorize atividade física regular e orientação profissional.';
        default:
            return '';
    }
}


function calcularTDEE(tmb, fatorAtividade) {
    return tmb * fatorAtividade;
}

function mostrarTDEE(tdee) {
    document.getElementById('tdee').textContent = `Calorias diárias sugeridas: ${tdee.toFixed(0)} kcal`;
}

function recomendarPlano(tdee, classificacao) {
    let treino = '';
    let dieta = '';

     if (classificacao.includes('Magreza')) {
        treino = 'Foque em treino de força (musculação), 3-5x por semana.';
        dieta = `Aumente calorias para cerca de ${Math.round(tdee * 1.1)} kcal/dia com ênfase em proteínas.`;
    } 
    else if (classificacao === 'Peso normal') {
        treino = 'Mantenha treino equilibrado: força + aeróbico.';
        dieta = `Mantenha calorias próximas de ${Math.round(tdee)} kcal/dia com boa distribuição de macros.`;
    } 
    else if (classificacao === 'Sobrepeso') {
        treino = 'Dê prioridade a treinos aeróbicos + força moderada.';
        dieta = `Reduza calorias para cerca de ${Math.round(tdee * 0.85)} kcal/dia.`;
    } 
    else {
        treino = 'Priorize caminhada, exercícios leves e acompanhamento profissional.';
        dieta = `Reduza calorias para cerca de ${Math.round(tdee * 0.75)} kcal/dia, sempre com orientação médica.`;
    }

    return {treino, dieta};
}

function mostrarPlano(plano) {
    document.getElementById('treino').textContent = `Sugestão de treino: ${plano.treino}`;
    document.getElementById('dieta').textContent = `Sugestão de dieta: ${plano.dieta}`;
}

const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];

function atualizarListaPacientes() {
    const lista = document.getElementById('lista-pacientes');
    if (!lista) return;
    lista.innerHTML = '';

    pacientes.forEach((p, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${p.nome} - IMC: ${p.imc.toFixed(2)} (${p.classificacao})`;
        lista.appendChild(li);
    });
}

        
