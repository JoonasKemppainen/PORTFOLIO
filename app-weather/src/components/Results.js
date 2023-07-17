function Results({results}) {
    if(!results) {
        return <div></div>
    }

    return (
        <div className="results">
            <h1>{results.location.name}</h1>
            <h1>{results.location.country}</h1>
            <h4>local time: {results.location.localtime}</h4>
            <img src={results.current.condition.icon} alt="weather" />
            <h3>temperature: {results.current.temp_c} C</h3>
            <h3>feels like: {results.current.feelslike_c} C</h3>
            <h3>wind: {(results.current.wind_kph / 3.6).toFixed(0)} m/s</h3>
        </div>
    )
}

export default Results