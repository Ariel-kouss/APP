let knex = require("knex")
let connectionKnex = knex({
    client: 'pg',
    connection: {
        host:'localhost',
        user:'address',
        password:'root',
        database:'my_database',
    }

});

module.exports = connectionKnex;