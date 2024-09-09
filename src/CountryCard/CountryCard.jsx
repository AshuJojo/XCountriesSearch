import styles from './CountryCard.module.css';

function CountryCard({ flag, name, alt }) {
    return (
        <div className={`${styles.countryCard} countryCard`}>
            <img className={styles.CountryFlag} src={flag} alt={alt | name} />
            <div className={styles.CountryName}>
                {name}
            </div>
        </div>
    )
}

export default CountryCard