const express = require('express');
const Registration = require('../models/Registrations');
const router = express.Router();

// Route to handle POST requests to create a new registration document in the database
router.post('/registrations', async (req, res) => {
  try {
    const { Customer_Name, NIC_No, Email, Mobile_No, Password } = req.body;

    // Create a new registration document using the Registration model
    const registration = new Registration({
      Customer_Name,
      NIC_No,
      Email,
      Mobile_No,
      Password
    });

    // Save the new registration document to the database
    const savedRegistration = await registration.save();

    // Respond with the saved registration document as JSON
    res.json(savedRegistration);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Route to handle POST requests to authenticate a user
router.post('/auth', async (req, res) => {
  try {
    const { NIC_No, Password } = req.body;

    // Find the user with the specified NIC and password
    const user = await Registration.findOne({ NIC_No, Password });

    // If no user is found, respond with an error message
    if (!user) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }

    // If the user is found, respond with a success message
    res.json({ msg: 'Authenticated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
