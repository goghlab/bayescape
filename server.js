const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for specific origin (http://localhost:3000)
app.use(cors({ origin: 'http://localhost:3000' }));

// Initialize the Amadeus client with your API credentials
const Amadeus = require('amadeus');

const amadeus = new Amadeus({
  clientId: 'oZFX5hrqVo0nqrR58DbrQKf8mk9QSGRa', // Replace with your actual clientId
  clientSecret: 'yj97vc075fY951z1', // Replace with your actual clientSecret
});

// Define a route for /amadeus
app.get('/amadeus', async (req, res) => {
  try {
    const cityCode = req.query.cityCode; // Get the cityCode from query parameters
    if (!cityCode) {
      return res.status(400).json({ error: 'City code is required' });
    }

    const response = await amadeus.referenceData.locations.hotels.byCity.get({
      cityCode: cityCode,
    });

    // Handle the response data here
    console.log(response.data);
    res.json(response.data); // Send the data as a JSON response
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'An error occurred' }); // Send an error response
  }
});

// Start the Express server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
