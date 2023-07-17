import { useState } from "react";
import Search from "./components/Search"
import Results from "./components/Results"
import Footer from "./components/Footer";
import weatherServices from "./services/weather"

function App() {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState(null)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    weatherServices
    .getWeather(search)
    .then((data) => {
      setResults(data)
      setError("")
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error)
      setResults(null)
      setError("No results found, please try again")
    })
  }

  return (
    <div className="main">
      <Search 
        search={search} 
        setSearch={setSearch}
        handleSubmit={handleSubmit}
      />
      <br />
      <h2>{error}</h2>
      <Results results={results} />
      <Footer />
    </div>
  )
}

export default App;
