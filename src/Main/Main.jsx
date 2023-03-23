import styles from "../../css/Main.module.css"
import { Filter } from "../UI/Filter"
import { Searchbar } from "../UI/Searchbar"
import { Countries } from "./Countries"
import { useState } from "react"
import { useSelector } from "react-redux"

export const Main = () => {
    const [countryQuery, setCountryQuery] = useState("")
    const [regionSelect, setRegionSelect] = useState("all")
    const theme = useSelector(state => state.theme.dark)

    const handleCountrySearch = (value) => {
        setCountryQuery(value)
    }
    const handleRegionSelect = (value) => {
        setRegionSelect(value)
    }

    return <main className={styles.main}>
        <div className={styles.container}>
            <Searchbar onSearchbarChange={handleCountrySearch} />
            <Filter onDropdownChange={handleRegionSelect} />

        </div>
        <section className={styles.countries}>
            <Countries regionSelect={regionSelect} countryQuery={countryQuery} />
        </section>
    </main>
}