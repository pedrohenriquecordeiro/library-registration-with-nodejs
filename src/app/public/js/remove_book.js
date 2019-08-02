let tabelaLivros = document.querySelector('#books');
console.log(tabelaLivros);
tabelaLivros.addEventListener('click', (event) => {
    let elementClicked = event.target;
    console.log("clicked" + elementClicked);
    console.log(elementClicked.dataset.type);

    if(elementClicked.dataset.type == 'remove'){
        let book_id = elementClicked.dataset.ref;
        fetch(`http://localhost:3000/livros/${book_id}`,{method:'DELETE'})
        .then(response => {
            /* remove linha da tabela */
            let tr = elementClicked.closest(`#book_${book_id}`);
            tr.remove();
        })
        .catch(erro => console.log(erro));
    }
})