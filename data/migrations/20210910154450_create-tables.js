
exports.up = function (knex) {
    return knex.schema
        .createTable('' tbl => {

        })
        .createTable('' tbl => {

        })
        .createTable('' tbl => {

        });
};

exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('')
        .dropTableIfExists('')
        .dropTableIfExists('');
};
