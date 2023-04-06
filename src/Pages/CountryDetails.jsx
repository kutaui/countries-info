import { Link, useParams } from "react-router-dom"
import { useEffect, useState, } from "react"
import styles from "../../css/CountryDetails.module.css"
import api from "../API/countrydata"
import { useSelector } from "react-redux"


export const CountryDetails = () => {
    const theme = useSelector(state => state.theme.dark)

    const [country, setCountry] = useState([]);
    const params = useParams()

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await api.get(`/name/${params.id}?fullText=true`)
                setCountry(response.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchCountry()
    }, []);




    return <>
        <Link to=".." >  <button className={!theme ? styles["button-dark"] : styles["button-light"]} >Back </button></Link>
        {country.map((country, index) => {
            const nativeNameKey = Object.keys(country.name.nativeName)[0];
            const nativeName = country.name.nativeName[nativeNameKey].common;
            const currencyKey = Object.keys(country.currencies)[0]
            const currency = country.currencies[currencyKey].name
            const languageKey = Object.keys(country.languages)[0]
            const languageValues = Object.values(country.languages)
            const languages = languageValues.join(", ")
            const borders = country.borders && country.borders.length > 0 ? (
                country.borders.map((border, index) => <button className={!theme ? styles["borders-dark"] : styles["borders-light"]} key={index}>{border}</button>)
            ) : null;



            return <div className={styles.container} key={index}>
                <img src={country.flags.png} alt="" className={styles.image} />
                <div className={!theme ? styles["infocont-dark"] : styles["infocont-light"]}>
                    <h1>{country.name.common} </h1>
                    <div className={styles.info}>
                        <div>
                            <h5>Native Name: <span>{nativeName}</span></h5>
                        </div>
                        <div>
                            <h5>Population: <span>{country.population}</span></h5>
                        </div>
                        <div>
                            <h5>Region: <span>{country.region}</span></h5>
                        </div>
                        <div>
                            <h5>Sub Region: <span>{country.subregion}</span></h5>
                        </div>
                        <div>
                            <h5>Capital: <span>{country.capital}</span></h5>
                        </div>
                        <div className={styles.rightside}>
                            <div>
                                <h5>Top Level Domain: <span>{country.tld}</span></h5>
                            </div>
                            <div className={styles.borderdiv}>
                                <h5>Currencies: <span>{currency}</span></h5>
                            </div>
                            <div>
                                <h5>Languages: <span>{languages}</span></h5>
                            </div>
                        </div>
                    </div>
                    {country.borders && <div className={!theme ? styles["bordercont-dark"] : styles["bordercont-light"]}><h5>Border Countries:</h5> <span>{borders}</span></div>}
                </div>
            </div>
        })}

    </>

}

