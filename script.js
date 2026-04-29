<script>

// Adiciona um "ouvinte" para o evento de envio do formulário
document.getElementById("contactForm").addEventListener("submit", function(event) {
    
    // Impede o envio padrão do formulário (não recarrega a página)
    event.preventDefault(); 

    // Captura os valores digitados pelo usuário e remove espaços extras
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Seleciona o elemento onde será exibida a mensagem de sucesso
    const successMessage = document.getElementById("successMessage");

    // Expressão regular para validar o formato do e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se algum dos campos está vazio
    if (name === "" || email === "" || message === "") {
        alert("⚠️ Por favor, preencha todos os campos.");
        return; // Interrompe a execução se houver erro
    }

    // Verifica se o e-mail informado está em formato válido
    if (!emailPattern.test(email)) {
        alert("⚠️ Por favor, insira um e-mail válido.");
        return; // Interrompe a execução se o e-mail for inválido
    }

    // Se todas as validações passaram, exibe a mensagem de sucesso
    successMessage.style.display = "block";

    // Limpa os campos do formulário após o envio
    document.getElementById("contactForm").reset();

    // Após 3 segundos, esconde novamente a mensagem de sucesso
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);
});

</script>

<!-- Mensagem no console para indicar que o site foi carregado corretamente -->
<script>
console.log("Site carregado com sucesso!");
</script>
