const router = require('express').Router();

const {
  getCurrencies,
  getTitle,
  getCurrenciesWithSymbol,
} = require('../controllers/currencies.controller');

//router.get('/', getTitle);

router.get('/', getCurrencies);

router.get('/:symbol/:value', getCurrenciesWithSymbol);

module.exports = router;
