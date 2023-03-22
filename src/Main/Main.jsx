import styles from "../../css/Main.module.css"
import { Filter } from "../UI/Filter"
import { Searchbar } from "../UI/Searchbar"
import { Countries } from "./Countries"
import { useState } from "react"

export const Main = () => {
    const [countryQuery, setCountryQuery] = useState()

    const handleCountrySearch = (value) => {
        setCountryQuery(value)
    }

    return <main>
        <div className={styles.container}>
            <Searchbar onInputChange={handleCountrySearch} />
            <Filter />

        </div>
        <section className={styles.countries}>
            <Countries countryQuery={countryQuery} />
        </section>
    </main>
}