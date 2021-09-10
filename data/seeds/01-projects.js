
exports.seed = function (knex) {
  return knex('projects').insert([
    { project_name: 'Sprint', project_description: 'adding data persistence', project_completed: 0 }
  ]);
};
