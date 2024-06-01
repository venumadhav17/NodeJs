const router = require('express').Router();

const {
  getUsersData,
  getUsersById,
  getUsersWithGender,
} = require('../controllers/users.controller');

router.get('/', getUsersData);

router.get('/search', getUsersWithGender);

router.get('/:uuid', getUsersById);

module.exports = router;
