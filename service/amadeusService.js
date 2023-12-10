const Amadeus = require('amadeus');

const amadeus = new Amadeus({
  clientId: 'oZFX5hrqVo0nqrR58DbrQKf8mk9QSGRa', // Replace with your actual clientId
  clientSecret: 'yj97vc075fY951z1', // Replace with your actual clientSecret
});

async function searchHotels(cityCode) {
  try {
    console.log('Making API call to Amadeus...');

    const response = await amadeus.referenceData.locations.hotels.byCity.get({
      cityCode: cityCode,
    });

    console.log('API call successful!');

    // Handle the response data here or return it to the caller
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Fuck the hotel data'); // You can customize the error message as needed
  }
}

module.exports = { searchHotels };