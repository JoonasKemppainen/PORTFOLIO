function Search({search, setSearch, handleSubmit}) {
    return (
        <div className="search">
            <h1 className="searchH1">Weather App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="searchBar"
                    value={search} 
                    placeholder="Write a city name here"
                    onChange={e => setSearch(e.target.value)}
                />
                <br />
                <button className="searchButton" type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search;