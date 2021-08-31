let knex = require("./knex");
async function getAll()
{   
    return await knex('address').select('*');
}

async function createaddress()
{
    return await knex('address').insert()
}

module.exports = {getAll}