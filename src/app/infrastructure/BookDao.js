class BookDao{
    constructor(db){
        this._db = db;
    }

    list(callback){
        this._db.all(
            'SELECT * FROM livros',
            (error,results) => callback(error,results)
        );
    }

    add(book){
        return new Promise( (resolve,reject) => {
            this._db.run(
                `
                    INSERT INTO livros (
                        titulo,
                        preco,
                        descricao
                    ) values(?,?,?)
                `,
                [
                    book.titulo,
                    book.preco,
                    book.descricao
                ],
                (erro) => {
                    if(erro){
                        return reject('Não foi possível adicionar o book !');
                    }else{
                        resolve();
                    }
                }
            )
        })
    }

    searchById(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM livros
                    WHERE id = ?
                `,
                [id],
                (erro, book) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o book!');
                    }else{
                        return resolve(book);
                    }
                }
            );
        });
    }

    update(book) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE livros SET
                titulo = ?,
                preco = ?,
                descricao = ?
                WHERE id = ?
            `,
            [
                book.titulo,
                book.preco,
                book.descricao,
                book.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o book!');
                }else{
                    resolve();
                }
            });
        });
    }

    remove(id) {
        return new Promise((resolve, reject) => {
            this._db.run(
                `
                    DELETE 
                    FROM livros
                    WHERE id = ?
                `,
                [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover o book!');
                    }
                    return resolve();
                }
            );
        });
    }
}

module.exports = BookDao;