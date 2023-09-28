import axios from "axios";

const getLocationByInputValue = (city) => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`)

const getLocationByLatAndLonValue = (lat, lon) => axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}.04&appid=${import.meta.env.VITE_API_KEY}`)

export { getLocationByInputValue, getLocationByLatAndLonValue } 