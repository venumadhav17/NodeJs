const { data } = require('../DB/currency.json');

const getTitle = (req, res) => {
  // res.send('<h1>Currency Database</h1>');
  // console.log(module);
  res.sendStatus(200);
};

const getCurrencies = (req, res) => {
  // res.json({name: 'Alok'})
  // res.json(data);
  // console.log(req.query);

  /*if (!verifyAuth(req)) {
    // if(verifyAuth(req, res))
    return res.status(403).json({ message: 'Unauthorized Request' });
  } */
  const { min_val } = req.query;
  if (min_val) {
    const result = data.filter(
      (item) => Number(item.min_size) === Number(min_val)
    );
    res.json(result);
  } else {
    res.json(data);
  }
};

const getCurrenciesWithSymbol = (req, res) => {
  console.log('TEST', req.params);
  const { symbol } = req.params;
  const result = data.find((elem) => elem.id.toLowerCase() === symbol);
  res.json(result);
};

module.exports = { getTitle, getCurrencies, getCurrenciesWithSymbol };
