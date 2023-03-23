import styles from "../../css/Card.module.css"
import { useSelector } from "react-redux"
export const Card = (props) => {
    const theme = useSelector(state => state.theme.dark)

    return <>
        <div className={!theme ? styles["card-dark"] : styles["card-light"]}>
            <img src={props.flag} alt="" />
            <div className={styles.content}>
                <h4>{props.title}</h4>
                <h5>Population: <span>{props.pop}</span></h5>
                <h5>Region: <span>{props.region}</span></h5>
                <h5>Capital: <span>{props.capital}</span></h5>
            </div>
        </div>
    </>
}