import { fetchJson } from "../utils/fetchJson";

export const fetchCountryInformation = async (countryName) => {
    const url = `https://restcountries.com/v3.1/name/${countryName.toLowerCase()}`
    const data = await fetchJson(url);

    return data[0];
}

export const fetchWeatherInformation = async (long, lat) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=-${long}&current_weather=true`;

    return fetchJson(url);
}
