exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("addresses")
    .del()
    .then(() => {
      return knex("users").del();
    })
    .then(() => {
      // Inserts seed entries
      return knex("users")
        .insert([{
            username: "bertearazvan",
            password: "pass",
            first_name: "Razvan",
            last_name: "Bertea"
          },
          {
            username: "anders",
            password: "pass",
            first_name: "Anders",
            last_name: "Latif"
          },
          {
            username: "stefandrei123",
            password: "pass",
            first_name: "Stefan-Andrei",
            last_name: "Atudorei"
          },
          {
            username: "power-user",
            password: "$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy"
          }, {
            username: "admin",
            password: "$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy"
          }
        ])
        .then(userId => {
          return knex("addresses").insert([{
            user_id: userId[0],
            address_1: "bla bla",
            postal_code: "2300",
            city: "Copenhagen"
          }]);
        });
    });
};