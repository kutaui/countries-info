import styles from "../../css/Searchbar.module.css"

export const Searchbar = () => {
    return <>
        <div className={styles.container}>
            <img src="src/assets/white search.png" alt="" />
            <input type="search" placeholder="Search for a country" />
        </div>
    </>
}