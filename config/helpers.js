let Mysqli = require('mysqli');

// one config
let conn = new Mysqli({
    host: 'localhost', // IP/domain
    post: 3306, //port, default 3306
    user: 'root', // username
    passwd: '', // password
    charset: '', // CHARSET of database, default to utf8 【optional】
    db: 'mega_shop' // the default database name  【optional】
});

let db = conn.emit(false,'');  // use master library
// let db = conn.emit(false, 'test')
// let db = conn.emit(true, 'test')

module.exports = {
    database : db
}