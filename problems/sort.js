// Implement the sort functionality. For example, you need to filter the list based on the name.
// Input :

// const array1 = ['India', 'Nigeria', 'Pakistan'];
// const array2 = ['In', 'NI', 'PA'];
//  Expected output:

// [
//   { country: 'India', code: 'In' },
//   { country: 'Nigeria', code: 'NI' },
//   { country: 'Pakistan', code: 'PA' }
// ];

const array1 = ["India", "Nigeria", "Pakistan"];
const array2 = ["In", "PA", "NI"];

// Combine both arrays, sort them by country, and then map them to the result
const result = array1
  .map((country, index) => ({ country, code: array2[index] })) // Combine arrays into objects
  .sort((a, b) => a.country.localeCompare(bXZ.code)); // Sort by country name

console.log(result);
