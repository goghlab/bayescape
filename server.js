const express = require('express');
const cors = require('cors');
const app = express();
const { Amadeus } = require('amadeus');

// Allow requests from specified origins
const allowedOrigins = ['http://localhost:3000', 'https://bayescape.vercel.app'];

app.use(cors({
  origin: allowedOrigins,
  allowedHeaders: ['Content-Type', 'Authorization', 'User-Agent'],
}));

// Initialize the Amadeus client with your API credentials
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

    // Log the response data
    console.log(response.data);

    // Send the data as a JSON response
    res.json(response.data);
  } catch (error) {
    // Log the error
    console.error(error);

    // Send an error response with a more specific message
    res.status(500).json({ error: 'An error occurred while fetching Amadeus data' });
  }
});

// Start the Express server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
