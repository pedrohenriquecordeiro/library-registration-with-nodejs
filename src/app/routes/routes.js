const db = require('../../config/database');
const BookDao = require('../infrastructure/BookDao');

module.exports = (app) => {
    app.get('/', (request, response) => {
        let html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Casa do Código </h1>
            </body>
        </html>
        `
        response.send(html);
    });

    app.get('/listagem', (request, response) => {
        const bookDao = new BookDao(db);
        bookDao.list(
            (error,results) => {
                /* listagem de livros */
                response.marko(
                    require('../views/books/listing/listing.marko'),
                    {
                        books: results
                    }
                );
            }
        )
    });

    app.get('/livros/form', (request, response) => {
        response.marko(require('../views/books/form/form.marko'),{livro:{}})
    });

    app.get('/livros/form/:id' , (request,response) => {
        console.log("here");
        const id = request.params.id;
        const bookDao = new BookDao(db);
        bookDao.searchById(id) 
            .then( livro =>
                /* passamos o livro para a url */
                response.marko(
                    require('../views/books/form/form.marko'),
                    {livro:livro}
                )
            )
            .catch(erro => console.log(erro));
    });

    app.post('/livros',(request,response) => {
        console.log(request.body);
        console.log('in post');
        const bookDao = new BookDao(db);
        bookDao.add(request.body)
            .then(response.redirect('/listagem'))
            .catch(erro => console.log(erro));
    });

    /*  é necessário usar um middleware para filtrar quando
        o marko vai usar o metodo pust e quando vai usar o put 
    */
    app.put('/livros',(request,response) => {
        console.log(request.body);
        console.log('in post');
        const bookDao = new BookDao(db);
        bookDao.update(request.body)
            .then(response.redirect('/listagem'))
            .catch(erro => console.log(erro));
    });

    app.delete('/livros/:id' , (request,response) => {
        const id = request.params.id;
        const bookDao = new BookDao(db);
        bookDao.remove(id)
            .then(() => response.status(200).end())
            .catch(erro => console.log(erro));
    });
};