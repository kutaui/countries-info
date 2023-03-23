import Select from "react-select";
import { useSelector } from "react-redux"


const options = [
    { value: "all", label: "All" },
    { value: "africa", label: "Africa" },
    { value: "americas", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" }
]


export const Filter = (props) => {
    const theme = useSelector(state => state.theme.dark)

    const styles = {
        container: (baseStyles) => ({
            ...baseStyles,
            marginTop: "50px",
            border: "none"
        }),
        control: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: !theme ? "hsl(208, 23%, 22%)" : "hsl(0, 0%, 98%)",
            color: "white",
            width: "200px",
            height: "50px",
            border: "none",

        }),
        placeholder: (baseStyles) => ({
            ...baseStyles,
            color: !theme ? "white" : "hsl(200, 15%, 8%)",
            paddingLeft: "10px",
        }),
        indicatorSeparator: (baseStyles) => ({
            ...baseStyles,
            display: "none"
        }),
        menu: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: !theme ? "hsl(208, 23%, 22%)" : "hsl(0, 0%, 98%)",
            color: !theme ? "white" : "hsl(200, 15%, 8%)",

        }),
        option: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: !theme ? state.isFocused && "hsl(207, 26%, 17%)" : state.isFocused && "hsl(0, 0%, 85%)",
            color: !theme ? "white" : "hsl(200, 15%, 8%)",
            paddingLeft: "20px",
            paddingTop: '16px',


        }),
        singleValue: (baseStyles) => ({
            ...baseStyles,
            color: !theme ? "white" : "hsl(200, 15%, 8%)",
            paddingLeft: "10px",
        }),
        menuList: (baseStyles) => ({
            '& div:nth-of-type(1)': {
                paddingTop: '16px',
            },
            '& div:nth-of-type(6)': {
                paddingBottom: '16px',
            },
        })
    }

    const handleSelectvalue = (value) => {
        props.onDropdownChange(value.value)
    }

    return <div>
        <Select onChange={handleSelectvalue} styles={styles} options={options} placeholder="Filter by Region" />
    </div>

}