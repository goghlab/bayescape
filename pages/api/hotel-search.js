// hotel-search.js
import { createClient } from 'amadeus';

const amadeus = createClient({
  clientId: 'oZFX5hrqVo0nqrR58DbrQKf8mk9QSGRa',
  clientSecret: 'yj97vc075fY951z1',
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Handle POST request for hotel search
    try {
      // Make a request to the Amadeus API for hotel search
      const response = await amadeus.shopping.hotelOffers.get({
        cityCode: req.body.cityCode, // Include the city code from your form data
        // Add more search parameters as needed
      });

      // Process the response and send it to the client
      const hotels = response.data;
      res.status(200).json(hotels);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching hotel data.' });
    }
  } else {
    res.status(405).end();
  }
}
