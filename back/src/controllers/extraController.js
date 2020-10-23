const Extra = require('../models/extra');
const { validationResult } = require('express-validator');

exports.createExtra = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { vatNumber, insuranceNumber } = req.body;

  try {
    let extra = await Extra.findOne({ $or: [{ vatNumber }, { insuranceNumber }] });

    if (extra) {
      return res.status(400).json({ msg: 'The extra already exists' });
    }

    const newExtra = new Extra(req.body);

    await newExtra.save();
    res.json(newExtra);
  } catch (error) {
    console.log(error);
    res.status(400).send('There was an error in the save process');
  }
};
