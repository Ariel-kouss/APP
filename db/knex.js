let knex = require("knex")
let connectionknex = knex({
    client: 'pg',
    connection: {
        host:'localhost',
        user:'address',
        password:'root',
        database:'my_database',
    }

});

module.exports = connectionknex;