
const User = require('../models/user');

exports.userForm = (req, res, next) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        message: req.body.message,
    }).then(() => res.status(201).send({ message: "mail crée !" }))
      .catch(error => res.status(400).json({ error: "éléments manquants" }));   
}
