let btnOrdernaPorpreco = document.querySelector('#btnOrdenarPorPreco');

btnOrdernaPorpreco.addEventListener('click', ordenarLivrosPreco);

function ordenarLivrosPreco() {
    let ordLirvos = livros.sort((a,b) => a.preco - b.preco);

    exibeLivros(ordLirvos);
}

