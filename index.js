// Define the endpoint URLs
const statusEndpoint = '/Status';
const rulesEndpoint = '/Rules';
const disabledProductsEndpoint = '/DisabledProducts';
const resellersEndpoint = '/Resellers';

// Function to fetch data from an endpoint
async function fetchData(endpoint) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Function to handle data retrieval from all endpoints
async function getAllData() {
  try {
    const statusData = await fetchData(statusEndpoint);
    const rulesData = await fetchData(rulesEndpoint);
    const disabledProductsData = await fetchData(disabledProductsEndpoint);
    const resellersData = await fetchData(resellersEndpoint);
    
    // Handle the data as needed
    console.log('Status Data:', statusData);
    console.log('Rules Data:', rulesData);
    console.log('Disabled Products Data:', disabledProductsData);
    console.log('Resellers Data:', resellersData);
    
    // You can perform further operations with the retrieved data here
  } catch (error) {
    console.error('Error fetching data from one or more endpoints:', error);
  }
}

// Call the function to retrieve data from all endpoints
getAllData();
