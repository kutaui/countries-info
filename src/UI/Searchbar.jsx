import styles from "../../css/Searchbar.module.css"
import { useSelector } from "react-redux"

export const Searchbar = (props) => {
    const theme = useSelector(state => state.theme.dark)

    const handleInputChange = (e) => {
        props.onSearchbarChange(e.target.value)
    }


    return <>
        <div className={!theme ? styles["container-dark"] : styles["container-light"]}>
            {!theme ? <img src="assets/white-search.png" alt="" /> : <img src="assets/black-search.png" alt="" />}
            <input type="search" placeholder="Search for a country" onChange={handleInputChange} />
        </div>
    </>
}