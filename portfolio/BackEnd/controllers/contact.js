
const Contact = require('../models/contact');

exports.contactForm = (req, res, next) => {
    Contact.create({
        username: req.body.username,
        email: req.body.email,
        message: req.body.message,
        phone: req.body.phone
    }).then(contact=> {
        res.status(201).json({ 
            message: contact
        })            
})
      .catch(error => res.status(400).json({ error: "éléments manquants" }));   
}
