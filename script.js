document.addEventListener("DOMContentLoaded", () => {
    const botaoSaberMais = document.getElementById("btnSaberMais");
    const secaoInfoExtra = document.getElementById("info-extra");

    botaoSaberMais.addEventListener("click", () => {
        // Remove a classe que esconde a seção
        if (secaoInfoExtra.classList.contains("oculto")) {
            secaoInfoExtra.classList.remove("oculto");
            
            // Faz uma rolagem suave até o novo conteúdo
            secaoInfoExtra.scrollIntoView({ behavior: "smooth" });
            
            // Altera o texto do botão
            botaoSaberMais.textContent = "Eco-Eficiência";
        } else {
            // Se já estiver aberto, apenas rola até ele
            secaoInfoExtra.scrollIntoView({ behavior: "smooth" });
        }
    });
});