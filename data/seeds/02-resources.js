
exports.seed = function (knex) {
  return knex('resources').insert([
    { resource_name: 'skeleton', resource_description: 'on mt github(you know where)' },
    { resource_name: 'submission', resource_description: 'on canvas' }
  ]);
};
