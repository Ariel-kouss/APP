let knex = require("./knex");
async function getAll()
{   
    return await knex('address').select('*');
}

module.exports = {getAll}



