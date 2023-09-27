import { BsSearch } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'

import errorImage from '../assets/404.png'

export default function WeatherCard() {
  return (
    <main className='h-screen bg-slate-900 items-center justify-center flex'>
      <div className="bg-white w-1/3 h-auto rounded-lg p-3 bg-stone-100">
        <div className="text-zinc-500 flex items-center justify-between text-2xl">
          <FaLocationDot />
          <input type="text" placeholder="Digite a cidade" className="w-10/12 p-4 outline-none placeholder:text-xl placeholder:text-zinc-500 text-zinc-600 bg-stone-100" />
          <button aria-label="Realizar pesquisa" className='rounded-full bg-slate-200 p-4 ml-3 hover:bg-slate-400 hover:text-zinc-100 font-bold transition ease-in-out duration-300'><BsSearch /></button>
        </div>
        <div className='flex flex-col items-center'>
          <img src={errorImage} alt="Imagem de erro ao tentar buscar a cidade pesquisada" className='w-2/3 mt-6'/>
          <h2 className='text-sky-800 font-bold text-2xl text-center my-8'>Realize uma nova consulta!</h2>
        </div>
      </div>
    </main>
  )
}