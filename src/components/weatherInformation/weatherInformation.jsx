/* eslint-disable react/prop-types */
export default function WheaterInformation({weather}) {

  console.log(weather)
  return (
    <div>
      <h2>{weather.name}</h2>
      <div>
        {/* <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} /> */}
      </div>
      <p>{weather.main.temp}</p>
    </div>
  )
}
