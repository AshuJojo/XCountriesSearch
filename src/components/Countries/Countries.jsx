import CountryCard from "../CountryCard/CountryCard";
import styles from './Countries.module.css';

function Countries({ countries }) {
    return (
        <div className={styles.Container}>
            {countries && countries.map((country) => {
                return <CountryCard key={country.flag} flag={country.flags.png} name={country.name.common} alt={country.flags.alt} />
            })}
        </div>
    )
}

export default Countries