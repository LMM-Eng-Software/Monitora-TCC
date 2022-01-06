(() => {

    const inputLogin = document.querySelector('[data-input-cpf]');
    const botaoLogin = document.querySelector('[data-input-submit]');

    botaoLogin.addEventListener("click", () => {
        if (inputLogin.value == "1") window.location.href = '/monitora_tcc/pages/professor.html';
        else window.location.href = '/monitora_tcc/pages/aluno.html';
    });
})()