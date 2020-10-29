import React, { useState, useEffect } from 'react';
import axios from "axios";


function Home() {
    const [beerData, setBeerData] = useState([]);

    useEffect(() => {
        axios.get('https://api.openbrewerydb.org/breweries')
        .then(function(response){
            const beerresponsedata = response.data
            setBeerData(beerresponsedata);
            console.log('response', response)
        })
        .catch(function(error) {
            console.warn(error);
        })
    }, []);


    const [jokeData, setJokeData] = useState([]);

    useEffect(() => {
        axios.get('https://official-joke-api.appspot.com/jokes/ten')
        .then(function(response){
            const jokeresponsedata = response.data
            setJokeData(jokeresponsedata);
            console.log('response', response)
        })
        .catch(function(error) {
            console.warn(error)
        })
    }, []);

    console.log("beerData", beerData);
    console.log("jokeData", jokeData)
    return ( 
        <div>
            <h1>Home: Midterm</h1>
            {beerData.map((city, i) => (
                <div key={i}>
                    <h2>{city.name}</h2>
                    <p>State: {city.state}</p>
                </div>
            ))}
            {jokeData.map((type, i) => (
                <div key={i}>
                    <h2>{type.setup}</h2>
                    <p>State: {type.punchline}</p>
                </div>
            ))}
        </div>
    )
}

export default Home;