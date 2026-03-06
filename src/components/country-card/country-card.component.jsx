import "./country-card.styles.css";

const CountryCard = ({ countryData }) => {
  if (!countryData) return null;

  const {
    country,
    capital,
    capitalData,
    flag,
    languages,
    population,
    temperature,
    time,
    windDirection,
    windSpeed,
  } = countryData;

  debugger;

  return (
    <div className="country-card">
      <div className="country-header">
        <p className="country-flag">{flag}</p>
        <h2>{country}</h2>
      </div>

      <div className="country-info">
        <p>
          <strong>Capital:</strong> {capital}
        </p>

        <p>
          <strong>Population:</strong> {population.toLocaleString()}
        </p>

        <p>
          <strong>Languages:</strong> {languages.join(", ")}
        </p>

        <p>
          <strong>Capital Coordinates:</strong> {capitalData.lat},{" "}
          {capitalData.long}
        </p>
      </div>

      <div className="weather-info">
        <h3>Current Weather</h3>

        <p>
          <strong>Temperature:</strong> {temperature}
        </p>

        <p>
          <strong>Wind Speed:</strong> {windSpeed}
        </p>

        <p>
          <strong>Wind Direction:</strong> {windDirection}
        </p>

        <p>
          <strong>Time:</strong> {time}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
