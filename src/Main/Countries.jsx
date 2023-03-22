import { useEffect, useState } from "react";
import { Card } from "../UI/Card"
import api from "../API/countrydata"


export const Countries = ({ countryQuery }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await api.get("/all")
                setCountries(response.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchCountry()
    }, []);



    return <>
        {countryQuery && countries.filter((country) => country.name.common.toLowerCase().includes(countryQuery)).map((country, index) => {
            const formattedPop = country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return <Card key={index} title={country.name.common} capital={country.capital} region={country.region} pop={formattedPop} flag={country.flags.png} />
        })}
    </>
}