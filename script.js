document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Ação do Botão Principal (Hero)
    const btnConhecer = document.getElementById('btn-conhecer');
    
    btnConhecer.addEventListener('click', () => {
        // Rola suavemente até a seção de pilares
        document.getElementById('pilares').scrollIntoView({ behavior: 'smooth' });
    });

    // 2. Manipulação do Formulário de Contato
    const formContato = document.getElementById('form-contato');
    const feedback = document.getElementById('feedback');

    formContato.addEventListener('submit', (event) => {
        // Impede a página de recarregar com o envio do form
        event.preventDefault();

        // Captura os valores dos campos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        // Validação simples (o HTML5 já valida o básico, aqui fazemos a lógica de sucesso)
        if (nome && email) {
            // Exibe mensagem de sucesso
            feedback.textContent = `Obrigado pelo contato, ${nome}! Juntos faremos um agro mais sustentável.`;
            feedback.className = "sucesso"; // Aplica a classe estilizada no CSS
            
            // Limpa os campos do formulário
            formContato.reset();

            // Esconde a mensagem após 5 segundos
            setTimeout(() => {
                feedback.className = "hidden";
            }, 5000);
        }
    });
});