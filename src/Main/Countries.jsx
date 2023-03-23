import { useEffect, useState } from "react";
import { Card } from "../UI/Card"
import api from "../API/countrydata"


export const Countries = (props) => {
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


    let filteredCountries = countries.filter((country) => country.name.common.toLowerCase().includes(props.countryQuery))

    if (props.regionSelect !== "all") {
        filteredCountries = filteredCountries.filter((country) => country.region.toLowerCase() === props.regionSelect);
    }

    return <>
        {filteredCountries.map((country, index) => {
            const formattedPop = country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return <Card key={index} title={country.name.common} capital={country.capital} region={country.region} pop={formattedPop} flag={country.flags.png} />
        })}
    </>
}