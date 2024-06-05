const router = require('express').Router();

const {
  getUsersData,
  getUsersById,
  getUsersWithGender,
} = require('../controllers/users.controller');

const {
  validateSearchQuery,
} = require('../middlewares/validators/users.validator');

router.get('/', getUsersData);

router.get('/search', validateSearchQuery, getUsersWithGender); // if we register one more middleware first we need to define in users.contrller.js and gives next
// we can give next() before if condition without going to if conditions
router.get('/:uuid', getUsersById);

module.exports = router;
