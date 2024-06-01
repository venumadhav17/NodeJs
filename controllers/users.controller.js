const { data } = require('../DB/users.json');
const { getQueryErrors } = require('../validators/users.validator');

const getUsersData = (req, res) => {
  // console.log(data);
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

  const error = getQueryErrors({ age, gender });

  if (error) {
    return res.status(422).json(error);
  }
  /*if (gender) {
    if (!['female', 'male'].includes(gender)) {
      res
        .status(422)
        .json({ message: "Gender to search can either be 'male' or 'female'" });
    }
  }

  if (!age && !gender) {
    return res.status(422).json({
      message: 'Missing Search Parameters, search using age and/or gender',
    });
  }

  if (age) {
    if (!Number(age)) {
      return res
        .status(422)
        .json({ message: 'Age parameter should be a number' });
    }

    if (age >= 100 || age < 0) {
      // 0<age<=100
      //0 < console.log(typeof age) >= 100
      return res.status(422).json({
        message: 'Age out of bounds. It should be a number between 0 and 100',
      });
    }
  } */

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

module.exports = {
  getUsersData,
  getUsersById,
  getUsersWithGender,
};
