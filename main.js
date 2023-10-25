const modalPopup = document.querySelector("#modal-popup");
const btnFecharModal = document.querySelector(".btn-modal-popup");

// Função para carregar a janela modal
function abrirModal(carregarModal) {
  // Receber o seletor da janela modal que será aberta
  const modal = document.querySelector(`#${carregarModal}`);

  // Apresentar a janela modal
  modal.style.display = 'block';

  // Ocultar barra de rolagem
  document.body.style.overflow = 'hidden';
}

// Função para fechar a janela modal
function fecharModal(fecharModal) {
  // Receber o seletor da janela modal que será fechada
  const modal = document.querySelector(`#${fecharModal}`);

  // Ocultar a janela modal
  modal.style.display = 'none';

  // Apresentar barra de rolagem
  document.body.style.overflow = 'auto';
}

// Função para mostrar a modal dialog após 3 segundos
function exibirModalAutomaticamente() {
  setTimeout(function () {
    modalPopup.showModal();
    modalPopup.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }, 3000);
}

btnFecharModal.onclick = function () {
  modalPopup.close();

  modalPopup.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Função para abrir a modal de inscrição
function inscrever() {
  // Fechar a modal de diálogo
  modalPopup.close();
  
  // Abrir a modal de inscrição
  const modalEnviado = document.getElementById('ver-modal-enviado');
  modalEnviado.showModal();
}

// Chama a função para exibir a modal automaticamente
exibirModalAutomaticamente();