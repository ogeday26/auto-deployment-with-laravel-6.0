exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          firstname: 'Halil Safa',
          lastname: 'SAĞLIK',
          email: 'safa@rubiklabs.com',
          password: '$2a$10$awJrjOTxTiRrsv.Nn9Vq.OO6z3aaWgHMhlAunAYQduSfvo8FqD2eq'
        }
      ]);
    });
};
