then - Então
catch - Pega o erro
A Promis retorna um response, que é um amontodado de Bytes
que não podemos acessar e convertemos em
Json que parace um objeto em JS
Promise.all - resolve varias promise de uma vez
var consultaCEP = fetch('https://viacep.com.br/ws/89046631/json/')
.then(reposta => reposta.json()
.then(r => {
if (r.erro) {
throw Error('Esse cep não existe')
} else {
console.log(r)
}
})
.catch(erro => console.log("SEU ANIMALLLL"))
.finally('Final do processo')
)
