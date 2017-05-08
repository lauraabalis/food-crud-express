
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('food').del()
    .then(function () {
      // Inserts seed entries
      return knex('food').insert([
        {name: 'garbanzo beans', quantity: 3},
        {name: 'lettuce', quantity: 1},
        {name: 'salad dressing', quantity: 2},
        {name: 'cucumber', quantity: 2},
        {name: 'hearts of palm', quantity: 4}
      ]);
    });
};
