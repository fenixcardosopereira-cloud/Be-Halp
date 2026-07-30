/**
 * Arquitetura de Script em Vanilla JS
 * Responsável pela interatividade SPA, validação de formulário e menu mobile.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFormValidation();
  initHeaderScrollEffect();
});

/**
 * Controle do Menu Mobile (Hamburger Toggle)
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Fecha o menu ao clicar em qualquer link interno
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

/**
 * Validação Avançada e Envio do Formulário de Contato
 */
function initFormValidation() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Obtenção dos dados dos campos
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      // Validação básica dos campos
      if (!nome || !email || !telefone || !mensagem) {
        showFeedback(feedback, 'Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
      }

      if (!validateEmail(email)) {
        showFeedback(feedback, 'Por favor, insira um e-mail válido.', 'error');
        return;
      }

      // Simulação de envio com sucesso (assíncrono)
      showFeedback(feedback, 'Enviando solicitação...', 'success');

      setTimeout(() => {
        showFeedback(feedback, 'Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.', 'success');
        // Não resetamos os valores preenchidos no formulário conforme solicitação inicial
      }, 1200);
    });
  }
}

/**
 * Helper para validação de formato de e-mail via Expressão Regular
 */
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Exibição de mensagens de feedback de formulário
 */
function showFeedback(element, message, type) {
  element.textContent = message;
  element.className = `form-feedback ${type}`;
}

/**
 * Sombra dinâmica na Navbar durante a rolagem da página
 */
function initHeaderScrollEffect() {
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  });
}