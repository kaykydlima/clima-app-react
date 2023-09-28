import { useEffect, useState } from "react";
import { FaWater, FaWind } from "react-icons/fa6";

import cloud from '../assets/cloud.png';
import rain from '../assets/rain.png';
import clear from '../assets/clear.png';
import snow from '../assets/snow.png';
import mist from '../assets/mist.png';

export default function WeatherCard({ objWeather }) {
  const [urlImage, setUrlImage] = useState('')

  useEffect(() => {
    if (objWeather && objWeather.weather && objWeather.weather[0]) {
      switch (objWeather.weather[0].main) {
        case 'Clouds':
          setUrlImage(cloud)
          break;
        case 'Rain':
          setUrlImage(rain)
          break;
        case 'Haze':
          setUrlImage(mist)
          break;
        case 'Snow':
          setUrlImage(snow)
          break;
        case 'Clear':
          setUrlImage(clear)
          break;
        default:
          setUrlImage('')
          break;
      }
    }
  }, [objWeather])
  

  return (
    <div className="max-[600px]:mt-3 mt-2">
      <div className="flex items-center flex-col">
        <img src={urlImage} className="w-2/3" alt="Weather Icon" />
        <h2 className="mt-2 max-[600px]:text-3xl text-4xl font-bold text-sky-950">
          {parseInt(objWeather.main.temp)}°C
        </h2>
        <p className="mt-2 max-[600px]:text-base text-lg font-semibold">{objWeather.name}</p>
      </div>
      <div className="flex gap-4 justify-center flex-col">
        <div className="flex items-center gap-3">
          <FaWater className="max-[600px]:text-2xl text-3xl text-slate-900" />
          <div className="text-left">
            <p className="max-[600px]:text-lg text-xl font-bold text-slate-950">
              {objWeather.main.humidity}%
            </p>
            <p className="max-[600px]:text-base text-lg font-mono text-indigo-950 uppercase">
              Umidade
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaWind className="max-[600px]:text-2xl text-3xl text-slate-900" />
          <div className="text-left">
            <p className="max-[600px]:text-lg text-xl font-bold text-slate-950">
              {objWeather.wind.speed} Km/h
            </p>
            <p className="max-[600px]:text-base text-lg font-mono text-indigo-950 uppercase">
              Velocidade do vento
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
