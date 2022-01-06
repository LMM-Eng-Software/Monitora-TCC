(() => {

    const tcc2 = document.querySelector('[data-table-tcc2]');
    const inputBuscar = document.querySelector('[data-input-buscar]');
    const botaoBuscar = document.querySelector('[data-botao-buscar]');

    botaoBuscar.addEventListener("click", () => {

        const pesquisa = inputBuscar.value.toLowerCase();

        if ("realidade virtual".includes(pesquisa) || "lucas henrique santos neto".includes(pesquisa))
            tcc2.style.display = "none";
        else
            window.alert("Nenhum resultado encontrado");
    });
})()