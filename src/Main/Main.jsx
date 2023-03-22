import styles from "../../css/Main.module.css"
import { Filter } from "../UI/Filter"
import { Searchbar } from "../UI/Searchbar"
import { Countries } from "./Countries"

export const Main = () => {
    return <main>
        <div className={styles.container}>
            <Searchbar />
            <Filter />

        </div>
        <section className={styles.countries}>
            <Countries />
        </section>
    </main>
}