var express = require('express');
var router = express.Router();
var admin = require('../controller/admincontroller');


/* GET home page. */
router.post('/register', admin.register);
router.post('/', admin.login);
router.get('/view', admin.views);

module.exports = router;
