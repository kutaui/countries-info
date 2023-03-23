import styles from "../../css/Header.module.css"
import { useSelector, useDispatch } from "react-redux"
import { setDarkMode } from "../store/themestore"

export const Header = () => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme.dark)
    const handleThemeChange = () => {
        dispatch(setDarkMode())
    }


    return <>
        <header className={!theme ? styles["header-dark"] : styles["header-light"]}>
            <h2>Where in the world?</h2>

            <div onClick={handleThemeChange} className={!theme ? styles["theme-dark"] : styles["theme-light"]}>
                {!theme ? <img src="src/assets/theme-dark.png" alt="" /> : <img src="src/assets/theme-light.png" alt="" />}
                <h5>Dark Mode</h5>
            </div>


        </header>
    </>
}