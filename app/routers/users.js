var express = require('express');
var router = express.Router();

let usersController = require('../controllers/users');

router.post('/', usersController.processAdd);
router.get('/', usersController.usersList);

router.get('/:id', usersController.getByID);

router.put('/:id', usersController.processEdit);
router.delete('/:id', usersController.performDelete);

module.exports = router;