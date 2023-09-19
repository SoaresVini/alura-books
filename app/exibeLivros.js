

function exibeLivros(livros) {
    valorTotalDeLivrosDisp.innerHTML = ""
    inserirLivros.innerHTML = ""

    livros.forEach(livro => {

        let quantidadeLivros = livrosDisponiveis(livro);

        inserirLivros.innerHTML += `
        <div class="livro">
          <img class="livro__imagens ${quantidadeLivros}" src="${livro.imagem}" alt="${livro.alt}" />
          <h2 class="livro__titulo">
            ${livro.titulo}
          </h2>
          <p class="livro__descricao">${livro.autor}</p>
          <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
          <div class="tags">
            <span class="tag">${livro.categoria}</span>
          </div>
        </div>
       `
    })
    function livrosDisponiveis(livro) {
        if (livro.quantidade <= 0){
           return "indisponivel";
        }else {
            return "";
        }
    }
}
