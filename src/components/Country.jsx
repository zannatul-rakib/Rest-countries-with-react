import React from "react";

const Country = (props) => {
  const { name, flags, area, population, region, startOfWeek, subregion, capital } =
    props.country;
  return (
    <div className="country">
      <h3>{name.common}</h3>
      <div className="img-box">
        <img src={flags.png} alt={`${name.common} flag`} />
      </div>
      <div className="details">
        
        <table>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>:</td>
              <td>{capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>:</td>
              <td>{area}</td>
            </tr>
            <tr>
              <td>Population</td>
              <td>:</td>
              <td>{population}</td>
            </tr>
            <tr>
              <td>Region</td>
              <td>:</td>
              <td>{region}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Country;
