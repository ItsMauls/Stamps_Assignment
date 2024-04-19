const WEATHER_APIKEY = '283df98fbe1b41a5fcac5a00a4fc8df2'

const jakartaLatitude = '-6.1753942'
const jakartaLongitude = '106.827183'

const api = {
    hostname : 'https://api.openweathermap.org'
}

const url = `${api.hostname}/data/2.5/forecast?lat=${jakartaLatitude}&lon=${jakartaLongitude}&appid=${WEATHER_APIKEY}&units=metric`

const celciusFormat = (str) => `${str}°C`

const weatherForecast = async() => {
    try {
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        throw error
    }
}

console.log('Weather Forecast:')
weatherForecast().then(output => {
        const currentDate = new Date()
        const dailyForecasts = output.list.filter(forecast => {
        const forecastDate = new Date(forecast.dt * 1000)
            return (
                forecastDate.getHours() === 22 && // Mendapatkan Forecast tiap harinya yang terdapat di jam 10 
                forecastDate.getDate() !== currentDate.getDate() // Tidak menampilkan forecast hari ini
            )
        })
        
        dailyForecasts.forEach(forecast => {
            const date = new Date(forecast.dt * 1000)

            const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
            const tempFormattedDate = date.toLocaleDateString('en-US', options)
            const formattedDate = tempFormattedDate.split(',')

            const temp = forecast.main.temp

            const fullDate = `${formattedDate[0]},${formattedDate[1]}${formattedDate[2]}:`
            const output = `${fullDate} ${celciusFormat(temp)}`
            console.log(output);
        });  
})

/* expected output
    Sat, Apr 20 2024: 28.33°C
    Sun, Apr 21 2024: 28.22°C
    Mon, Apr 22 2024: 28.14°C
    Tue, Apr 23 2024: 27.82°C
    Wed, Apr 24 2024: 26.97°C
*/