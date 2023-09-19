
botoes.forEach(botao => {
    botao.addEventListener("click", filtroTeste)
})
function filtroTeste() {
    const categoria = document.getElementById(this.id).value

    let filterLivros = categoria == 'disponivel' ? filtraPorDisp() : filtraPorCategoria()

    exibeLivros(filterLivros)

    let  valor = calcValorTotalLivros(filterLivros);
    exiberValorTotaldeLivrosDisponiveis(valor)

    function exiberValorTotaldeLivrosDisponiveis(valor) {
        valorTotalDeLivrosDisp.innerHTML = `
       
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
        </div>
       
        `
    }

    function filtraPorDisp() {
        return livros.filter(livro => livro.quantidade > 0);
    }

    function  filtraPorCategoria() {
        return livros.filter(livro => livro.categoria == categoria)
    }



}
