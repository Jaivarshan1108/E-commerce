const express = require('express');
const{registeruser,loginuser} = require('../controller/usercontroller');

const router = express.Router();

router.post('/login',loginuser);
router.post('/register',registeruser);

module.exports = router;
