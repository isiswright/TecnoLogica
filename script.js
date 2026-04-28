<script>
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // impede envio real

    // pegar valores
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const successMessage = document.getElementById("successMessage");

    // validação de e-mail simples
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // validações
    if (name === "" || email === "" || message === "") {
        alert("⚠️ Por favor, preencha todos os campos.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("⚠️ Por favor, insira um e-mail válido.");
        return;
    }

    // se tudo estiver correto
    successMessage.style.display = "block";

    // limpar campos
    document.getElementById("contactForm").reset();

    // esconder mensagem depois de 3 segundos
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);
});
</script>
console.log("Site carregado com sucesso!");
