const { data } = require('../DB/users.json');

const getUsersData = (req, res) => {
  console.log(data);
  res.json(data);
};

const getUsersById = (req, res) => {
  const { uuid } = req.params;
  const result = data.find((elem) => elem.login.uuid === uuid);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404);
  }
};

const getUsersWithGender = (req, res) => {
  const { gender, age } = req.query;
  if (gender && age) {
    const result = data.filter(
      (elem) => elem.gender === gender && Number(elem.dob.age) >= Number(age)
    );
    res.status(200).json(result);
  } else if (gender) {
    //console.log(typeof gender);
    const result = data.filter((elem) => typeof elem.gender == typeof gender);
    res.status(200).json(result);
  } else if (age) {
    const result = data.filter((elem) => Number(elem.dob.age) >= Number(age));
    res.status(200).json(result);
  } else {
    res.status(404).json({ status: 'Not Found' });
  }
};

module.exports = { getUsersData, getUsersById, getUsersWithGender };
