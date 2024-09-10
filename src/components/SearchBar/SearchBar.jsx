import { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ countries, setFilteredCountries }) {
    const [searchText, setSearchText] = useState('');

    const searchCountries = () => {
        console.log(`searchText: ${searchText}`)
        const filteredCountries = countries.filter((country) => country.name.common.toLowerCase().includes(searchText.toLowerCase()));

        console.log('filteredCountries', filteredCountries)
        return filteredCountries;
    }

    useEffect(() => {
        if (!searchText) {
            setFilteredCountries(countries);
            return;
        }

        const data = searchCountries();
        setFilteredCountries(data);
    }, [searchText]);

    return (
        <div className={styles.Container}>
            <input className={styles.SearchInput} placeholder='Search for countries' type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        </div>
    )
}

export default SearchBar