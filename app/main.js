let livros = []
const inserirLivros = document.querySelector('#livros');
const valorTotalDeLivrosDisp = document.querySelector('#valor_total_livros_disponiveis');
const botoes = document.querySelectorAll(".btn");
const  endPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getbuscaLivros()

async function getbuscaLivros() {
    const resp = await fetch(endPointDaApi)
    livros = await resp.json()
    let livrosDesconto = aplicarDesconto(livros)
    exibeLivros(livrosDesconto)
}
