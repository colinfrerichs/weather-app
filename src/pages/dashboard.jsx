import { useEffect, useState } from "react";

import {
  fetchCountryInformation,
  fetchWeatherInformation,
} from "../services/api";

import CountryCard from "../components/country-card/country-card.component";
import Search from "../components/search/search.component";

import "./dashboard.styles.css";

const Dashboard = () => {
  const [searchCountry, setSearchCountry] = useState("");
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    if (!searchCountry) return;

    const fetchData = async () => {
      const countryDataFetch = await fetchCountryInformation(searchCountry);
      const { capital, capitalInfo, flag, languages, population } =
        countryDataFetch;

      const capitalLat = capitalInfo.latlng[0];
      const capitalLong = capitalInfo.latlng[1];

      const capitalWeatherDataFetch = await fetchWeatherInformation(
        capitalLong,
        capitalLat,
      );

      const combined = Object.fromEntries(
        Object.entries(capitalWeatherDataFetch.current_weather).map(
          ([key, value]) => [
            key,
            `${value} ${capitalWeatherDataFetch.current_weather_units[key]}`,
          ],
        ),
      );

      setCountryData({
        country: searchCountry.charAt(0).toUpperCase() + searchCountry.slice(1),
        capital: capital[0],
        capitalData: {
          lat: capitalLat,
          long: capitalLong,
        },
        flag: flag,
        languages: [...Object.values(languages)],
        population: population,
        temperature: combined.temperature,
        time: combined.time,
        windDirection: combined.winddirection,
        windSpeed: combined.windspeed,
      });
    };

    fetchData();
  }, [searchCountry]);

  const handleSearch = (searchInput) => {
    setSearchCountry(searchInput);
  };

  return (
    <div className="country-information-container">
      <Search
        label="Search country"
        onSearch={handleSearch}
        placeholder="Enter a country"
      />

      {countryData && (
        <div className="results-container">
          <p>
            Showing results for: <strong>{searchCountry}</strong>
          </p>
          <div className="card-container">
            <CountryCard countryData={countryData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
