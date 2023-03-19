import styles from "../../css/Card.module.css"

export const Card = (props) => {
    return <>
        <div className={styles.card}>
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