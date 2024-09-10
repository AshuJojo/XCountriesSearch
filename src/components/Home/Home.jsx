import { useEffect, useState } from "react";
import Countries from "../Countries/Countries"
import SearchBar from "../SearchBar/SearchBar";
import styles from './Home.module.css';

function Home() {
    const API_ENDPOINT = 'https://restcountries.com/v3.1/all';
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    const fetchCountries = async () => {
        try {
            const res = await fetch(API_ENDPOINT);
            const data = await res.json();

            return data;
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        (async () => {
            const data = await fetchCountries();
            setCountries(data);
            setFilteredCountries(data);
        })();
    }, []);

    return (
        <div className={styles.Container}>
            <SearchBar countries={countries} setFilteredCountries={setFilteredCountries} />
            <Countries countries={filteredCountries} />
        </div>
    )
}

export default Home