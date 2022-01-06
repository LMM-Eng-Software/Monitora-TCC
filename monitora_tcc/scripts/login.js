(() => {

    const form = document.querySelector('[data-input-form]');
    const inputLogin = document.querySelector('[data-input-cpf]');

    form.addEventListener("submit", e => {

        var url;

        e.preventDefault();
        
        if (inputLogin.value.toLowerCase() == "1") {
            url = window.location.href.replace("login", "professor");
            window.location.href = url;
        }
        else if (inputLogin.value.toLowerCase() == "2") { 
            url = window.location.href.replace("login", "aluno");
            window.location.href = url;
        }
        else
            window.alert("Usuário não cadastrado.");
    });
})()