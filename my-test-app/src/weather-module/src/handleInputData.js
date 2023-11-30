/**
 * Convert the first letter of the entered city and country name from lower case to upper case.
 *
 * @param {string} city The city's name to convert.
 * @returns {string} City name with the first letter capitalized if it was lowercase.
 */
export function makeFirstLetterUppercase (city) {
  if (city && city[0] === city[0].toLowerCase()) {
    return city[0].toUpperCase() + city.slice(1)
  }
  // If the first letter is already uppercase, return the city name as is.
  return city
}
