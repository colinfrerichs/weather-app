// The APIs should use the city being input to get the weather for that city.
// So, one API would pull all of the information about that city, and one would pull the information about
// the weather and the transformer will combine them.

// https://restcountries.com/v3.1/name/peru
// OpenWeather

export const fetchCountryInformation = (countryName) => {
    const url = `https://restcountries.com/v3.1/name/${countryName.toLowerCase()}`
}
