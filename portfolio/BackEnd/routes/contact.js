const express = require('express');
const router = express.Router();

const contactControllers = require('../controllers/contact');

router.post('/form', contactControllers.contactForm);

module.exports = router;