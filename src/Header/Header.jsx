import styles from "../../css/Header.module.css"
export const Header = () => {
    return <>
        <header className={styles.header}>
            <h2>Where in the world?</h2>
            <div className={styles.theme}>
                <img src="src/assets/theme-dark.png" alt="" />
                <h5>Dark Mode</h5>

            </div>


        </header>
    </>
}