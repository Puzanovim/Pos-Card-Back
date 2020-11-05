const mysql = require('mysql2');

const pool = mysql.createPool({
    // connectionLimit: 10,
    password: 'nt8ewv6hxK',
    user: 'admin_pos',
    database: 'admin_pos',
    host: 'urfu1.paulislava.space',
    // port: '3306'
});

//         host: 'urfu1.paulislava.space',
//         user: 'admin_pos',
//         database: 'admin_pos',
//         password: 'nt8ewv6hxK'

let chirprdb = {};

chirprdb.all = () => {

    return new Promise((resolve, reject) => {

        pool.query('SELECT * FROM `card_partners`', (err, results) => {

            if (err) {
                return reject(err);
            }
            return resolve(results);

        });
    });
};

chirprdb.one = (id) => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM card_partners WHERE id = ?`,[id], (err, results) => {

            if (err) {
                return reject(err);
            }
            return resolve(results);

        });
    });
};

module.exports = chirprdb;

