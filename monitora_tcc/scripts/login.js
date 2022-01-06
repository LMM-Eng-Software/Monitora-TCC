(() => {

    const form = document.querySelector('[data-input-form]');
    const inputLogin = document.querySelector('[data-input-cpf]');

    form.addEventListener("submit", e => {
        e.preventDefault();
        if (inputLogin.value.toLowerCase() == "professor")
            window.location.href = '/monitora_tcc/pages/professor.html';
        else if (inputLogin.value.toLowerCase() == "aluno") 
            window.location.href = '/monitora_tcc/pages/aluno.html';
        else
            window.alert("Usuário não cadastrado.");
    });
})()