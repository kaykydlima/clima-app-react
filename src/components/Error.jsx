import errorImage from '../assets/404.png'

export default function Error() {
  return (
    <div className='flex flex-col items-center'>
    <img src={errorImage} alt="Imagem de erro ao tentar buscar a cidade pesquisada" className='w-2/3 mt-6'/>
    <h2 className='text-sky-800 font-bold text-2xl text-center my-8'>Realize uma nova consulta!</h2>
  </div>
  )
}