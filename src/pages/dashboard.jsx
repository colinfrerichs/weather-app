import { useEffect, useState } from "react";

import {
  fetchCountryInformation,
  fetchWeatherInformation,
} from "../services/api";

import CountryCard from "../components/country-card/country-card.component";
import Search from "../components/search/search.component";
import WeatherCard from "../components/weather-card/weather-card.component";

const Dashboard = () => {
  const [searchCountry, setSearchCountry] = useState("");

  // This should trigger the APIs to pull whatever the new information is.
  useEffect(() => {
    if (!searchCountry) return;

    const fetchData = async () => {
      const countryData = await fetchCountryInformation(searchCountry);
      const latlong = countryData.capitalInfo.latlng;

      console.log(latlong);
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

      {searchCountry && (
        <div className="results-container">
          <p>
            Showing results for: <strong>{searchCountry}</strong>
          </p>
          <div className="card-container">
            <CountryCard />
            <WeatherCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
