import { BsSearch } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'

import { getLocationByInputValue } from '../services/index'
import { useState } from 'react'
import WeatherCard from './WeatherCard'
import Error from './Error'

export default function Weather() {
  const [inputValue, setInputValue] = useState('')
  const [locationObject, setLocationObject] = useState(null)
  const [searched, setSearched] = useState(false)

  async function getLocationWeather() {
    try {
      const request = await getLocationByInputValue(inputValue)
      const resp = await request.data
      setLocationObject(resp)
      setSearched(true)
    } catch (e) {
      console.log(e)
      setSearched(true)
      setLocationObject(false)
    }
  }

  function getInputValue(e) {
    setInputValue(e.target.value)
  }

  function handler(e) {
    if(e.code == 'Enter') getLocationWeather()
  }

  return (
    <main className='h-screen bg-slate-900 items-center justify-center flex'>
      <div className="w-1/3 h-auto rounded-lg p-3 bg-stone-100 max-[1000px]:w-2/3">
        <div className="text-zinc-500 flex items-center justify-between text-2xl">
          <FaLocationDot />
          <input type="text" placeholder="Digite a cidade" onKeyDown={getInputValue} onKeyUp={handler} className="w-10/12 p-2 outline-none placeholder:text-xl placeholder:text-zinc-500 text-zinc-600 bg-stone-100" />
          <button aria-label="Realizar pesquisa" onClick={getLocationWeather} className='rounded-full bg-slate-200 p-4 ml-3 hover:bg-slate-400 hover:text-zinc-100 font-bold transition ease-in-out duration-300'><BsSearch /></button>
        </div>        
        {
          searched ? (locationObject ? <WeatherCard objWeather={locationObject} /> : <Error />) : null
        }
      </div>
    </main>
  )
}