const express = require("express");

const app = express();

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// Setup the database

const {
    Model
} = require("objection");
const Knex = require("knex");
const knexFile = require("./knexfile.js");

const knex = Knex(knexFile.development);

//Give the knex instance to objection

Model.knex(knex);

const User = require("./models/User");

const usersRoute = require("./routes/users");

app.use(usersRoute);

app.get("/", async (req, res) => {
    //   const result = await knex.select().from("users");
    //   const addresses = await knex.select().from("addresses");
    return res.send({
        resukt: await User.query()
    });
});

// Start the server

const port = process.env.PORT || 8080;

const server = app.listen(port, err => {
    if (err) {
        console.log("Server is down");
        return;
    }

    return console.log("Server is listening to port", server.address().port);
});