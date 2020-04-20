const router = require("express").Router();

const User = require("../models/User");

const bcrypt = require("bcrypt");
const saltRounds = 10;

// bcrypt.hash("password", saltRounds, (error, hashedPassword) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log("this is the newly hashed password", hashedPassword);
// })

// bcrypt.compare("password", "$2b$10$iIWF5cIuNrXrRGw8xqdr7efqYjgpqxc1OJWIM3IhzXSNPhH6.MJ5q", (error, isSame) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log("it is the same? ", isSame);
// })

router.post("/users/login", async (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    const users = await User.query()
      .where({
        username: username,
      })
      .limit(1);
    const user = users[0];

    if (!user) {
      return res.status(404).send({
        message: "wrong username",
      });
    }

    bcrypt.compare(password, user.password, (error, isSame) => {
      if (error) {
        return res.status(500).send({});
      }
      console.log(isSame);
      if (!isSame) {
        return res.status(404).send({
          message: "wrong password",
        });
      } else {
        return res.send({
          response: user,
        });
      }
    });
  } else {
    return res.send({
      message: "username or password not defined",
    });
  }
});

router.post("/users/register", (req, res) => {
  const { username, password, repeatPassword } = req.body;

  if (username && password && repeatPassword && password === repeatPassword) {
    if (password.length <= 8) {
      return res.status(400).send({
        response: "Missing username or password",
      });
    } else {
      bcrypt.hash(password, saltRounds, async (error, hashedPassword) => {
        if (error) {
          return res.status(500).send({});
        }
        try {
          const existingUser = await User.query()
            .select()
            .where({
              username: username,
            })
            .limit(1);

          if (existingUser[0]) {
            return res.status(404).send({
              response: "User already exists",
            });
          } else {
            const newUser = await User.query()
              .insert({
                username,
                password: hashedPassword,
              })
              .whereNotExists(() => {
                User.query().select().whereNot({
                  username: username,
                });
              });
            return res.status(200).send({
              newUser,
            });
          }
        } catch (err) {
          return res.status(500).send("Something went wrong");
        }
      });
    }
  } else {
    return res.status(404).send({
      message: "Missing field",
    });
  }
});

module.exports = router;
