import axios from "axios"
import { useRef, useState } from "react"
import WheaterInformation from "./components/weatherInformation/weatherInformation"

export default function App() {
  const [weather, setWeather] = useState({})
  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = 'a22c2119ff0796b794879990f515115f'

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)
  }

  

  return (
    <>
     <div>
        <h1>DevClub Previsão do Tempo</h1>
        <input ref={inputRef} type="text" placeholder="Digite o nome da cidade"/>
        <button onClick={searchCity}>Buscar</button>

        <WheaterInformation weather={weather}/>
     </div>
    </>
  )
}

