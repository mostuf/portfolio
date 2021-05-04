const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/user');

router.post('/form', userControllers.userForm);

module.exports = router;