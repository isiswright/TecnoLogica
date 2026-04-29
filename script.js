// Espera o carregamento da página antes de rodar o script
document.addEventListener("DOMContentLoaded", function () {

    // Captura o formulário
    const form = document.getElementById("contactForm");

    // Captura mensagem de sucesso
    const successMessage = document.getElementById("successMessage");

    // Evento de envio
    form.addEventListener("submit", function (event) {

        // Impede envio automático
        event.preventDefault();

        // Captura valores
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Regex de e-mail
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validação: campos vazios
        if (name === "" || email === "" || message === "") {
            alert("⚠️ Preencha todos os campos!");
            return;
        }

        // Validação: e-mail inválido
        if (!emailPattern.test(email)) {
            alert("⚠️ E-mail inválido!");
            return;
        }

        // Sucesso
        successMessage.style.display = "block";

        // Limpa formulário
        form.reset();

        // Esconde mensagem depois de 3s
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);

    });

});
