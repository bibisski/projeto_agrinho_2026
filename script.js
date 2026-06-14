document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Interatividade do Formulário de Contato
    const form = document.getElementById('form-contato');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o recarregamento da página

        // Captura os dados digitados
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        // Simula o envio bem-sucedido
        mensagemSucesso.textContent = `Obrigado pelo apoio, ${nome}! Entraremos em contato pelo e-mail: ${email}.`;
        mensagemSucesso.classList.remove('hidden');

        // Limpa o formulário
        form.reset();

        // Esconde a mensagem após 5 segundos
        setTimeout(() => {
            mensagemSucesso.classList.add('hidden');
        }, 5000);
    });

    // 2. Interatividade nos Cards dos Pilares
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const pilar = card.getAttribute('data-pilar');
            console.log(`Pilar selecionado: ${pilar}`);
            
            // Pequeno efeito visual de clique alterando temporariamente o fundo
            card.style.backgroundColor = '#d8f3dc';
            setTimeout(() => {
                card.style.backgroundColor = '#ffffff';
            }, 300);
        });
    });
});