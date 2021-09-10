
exports.seed = function (knex) {
  return knex('tasks').insert([
    { task_description: 'make index, server, router and models', task_completed: 0, project_id: 1 },
    { task_description: 'make migration/tables', task_notes: 'npx knex migrate:make', task_completed: 0, project_id: 1 },
    { task_description: 'Push & commit regularly', task_completed: 1, project_id: 1 }
  ]);
};
