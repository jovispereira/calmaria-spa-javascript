const modalPopup = document.querySelector("#modal-popup");
const btnFecharModal = document.querySelector(".btn-modal-popup");

// Função para gerenciar o foco dentro das Modais
function gerenciarFocoModal(modalId) {
  const modal = document.querySelector(`#${modalId}`);
  const elementosModal = modal.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const primeiroElemento = elementosModal[0];
  const ultimoElemento = elementosModal[elementosModal.length - 1];

  modal.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      if (event.shiftKey) {
        // Se a tecla Shift+Tab for pressionada, direcione o foco para o último elemento do modal
        if (document.activeElement === primeiroElemento) {
          event.preventDefault();
          ultimoElemento.focus();
        }
      } else {
        // Se apenas a tecla Tab for pressionada, direcione o foco para o primeiro elemento do modal
        if (document.activeElement === ultimoElemento) {
          event.preventDefault();
          primeiroElemento.focus();
        }
      }
    }
  });
}

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

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    fecharModal('ver-modal');
    fecharModal('ver-modal-enviado');
  }
});

// Função para mostrar a modal dialog após 3 segundos
function exibirModalAutomaticamente() {
  setTimeout(function () {
    var modalPopup = document.getElementById('modal-popup');
    modalPopup.showModal();
    modalPopup.style.display = 'block';
    document.body.style.overflow = 'hidden';

    var emailInput = modalPopup.querySelector('#email');
    if (emailInput) {
      emailInput.focus();
      emailInput.select(); // Seleciona o texto no campo
    }
  }, 3000);
}

// Fechar a modal ao pressionar ESC
modalPopup.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
   modalPopup.close();

  modalPopup.style.display = 'none';
  document.body.style.overflow = 'auto';
  }
});

btnFecharModal.onclick = function () {
  modalPopup.close();

  modalPopup.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function inscrever() {
  // Fechar a modal de diálogo
  modalPopup.close();

  abrirModal('ver-modal-inscrito')
}

// Chama a função para exibir a modal automaticamente
exibirModalAutomaticamente();

// Chamar essa função para cada modal que você deseja controlar o foco
gerenciarFocoModal('ver-modal');
gerenciarFocoModal('ver-modal-enviado');
gerenciarFocoModal('modal-popup');