import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from "../components/Header";
import { useHistory } from 'react-router-dom';



function Home() {
    const history = useHistory();

    const [beerData, setBeerData] = useState([]);
    const [state, setState] = useState("New_York");

    useEffect(() => {
        axios.get(`https://api.openbrewerydb.org/breweries?by_state=${state}`)
        .then(function(response){
            const beerresponsedata = response.data
            setBeerData(beerresponsedata);
            console.log('response', response)
        })
        .catch(function(error) {
            console.warn(error);
        })
    }, [state]);

    useEffect(() => {
        const searchParams = history.location.search;
        const urlParams = new URLSearchParams(searchParams);
        const state = urlParams.get("state");
        if (state) {
            setState(state)
        }
    }, [history]);

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
        <div >
            <Header/>
            <div className="App">
                {beerData.map((state, i) => (
                    <div key={i} className="beer">
                        <h2 className="beername">{state.name}</h2>
                        <p className="beercity">City: {state.city}</p>
                    </div>
                ))}
                {jokeData.map((type, i) => (
                    <div key={i} className = "jokes">
                        <h2 className="jokeq">{type.setup}</h2>
                        <p className="jokea">Answer: {type.punchline}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;