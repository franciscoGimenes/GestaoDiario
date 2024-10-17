// Seleciona os elementos do modal e overlay
const overlay = document.getElementById('overlay');
const modalProfessores = document.getElementById('modalProfessores');
const modalRecados = document.getElementById('modalRecados')

// Seleciona todos os professores
const professores = document.querySelectorAll('.professor');
const recados = document.querySelectorAll('.recado');

// Função para abrir o modal
function abrirModalProfessores() {
    modalProfessores.style.display = 'flex';
    overlay.style.display = 'block';
}

// Função para fechar o modal
function fecharModal() {
    modalProfessores.style.display = 'none';
    modalRecados.style.display = 'none';
    overlay.style.display = 'none';
}

function abrirModalRecados(){
    modalRecados.style.display = 'flex';
    overlay.style.display = 'block';
}

// Adiciona evento de clique a cada professor
professores.forEach(professor => {
    professor.addEventListener('click', abrirModalProfessores);
});
recados.forEach(recado => {
    recado.addEventListener('click', abrirModalRecados);
});

// Fecha o modal ao clicar fora dele (no overlay)
overlay.addEventListener('click', fecharModal);
