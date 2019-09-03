exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { firsname: 'Halil Safa', lastname: 'SAĞLIK', email: 'safa@rubiklabs.com', password: '123' }
      ]);
    });
};
