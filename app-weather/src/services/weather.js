import axios from "axios"
const baseUrl = "https://api.weatherapi.com/v1/current.json?"


const key = process.env.REACT_APP_API_KEY

const getWeather = (city) => {
    const request = axios.get(`${baseUrl}key=${key}&q=${city}`)
    return request.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getWeather }