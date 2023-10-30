const Amadeus = require('amadeus');

const amadeus = new Amadeus({
  clientId: 'oZFX5hrqVo0nqrR58DbrQKf8mk9QSGRa', // Replace with your actual clientId
  clientSecret: 'yj97vc075fY951z1', // Replace with your actual clientSecret
});

const cityCode = 'SZX'; // Shenzhen city code

async function searchHotels() {
  try {
    console.log('Making API call to Amadeus...'); // Log that the API call is being made
    const response = await amadeus.referenceData.locations.hotels.byCity.get({
      cityCode: cityCode,
    });

    console.log('API call successful!'); // Log that the API call was successful

    // Handle the response data here
    console.log('Response data:', response.data); // Log the response data
  } catch (error) {
    // Handle errors
    console.error('Error:', error); // Log the error
  }
}

// Call the function to perform the hotel search
searchHotels();
