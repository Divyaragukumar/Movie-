import React, { Fragment } from 'react';
import './Header.css';
import Card from './Card';



const Header = ({ searchMovie, query, setQuery, movies }) => {
    return (
        <>
            <div className="header">
                <h1 className="title">Movie-search</h1>

                {/*Search form*/}

                <div className="search">
                    <form className="search-form" onSubmit={searchMovie}>
                        <label>
                            htmlFor="query"
                            className="name"
                        
                        </label>
                        <input
                            type="text"
                            name="query"
                             placeholder="Type Movie Here"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>

            <div className="list-movie">
                <Card movies={movies} />
            </div>
        </>
    )
}

export default Header;