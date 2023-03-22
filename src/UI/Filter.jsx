import Select from "react-select";

const styles = {
    container: (baseStyles) => ({
        ...baseStyles,
        marginTop: "50px",
        border: "none"
    }),
    control: (baseStyles) => ({
        ...baseStyles,
        backgroundColor: "hsl(208, 23%, 22%)",
        color: "white",
        width: "200px",
        height: "50px",
        border: "none",

    }),
    placeholder: (baseStyles) => ({
        ...baseStyles,
        color: "white",
        paddingLeft: "10px",
    }),
    indicatorSeparator: (baseStyles) => ({
        ...baseStyles,
        display: "none"
    }),
    menu: (baseStyles) => ({
        ...baseStyles,
        backgroundColor: "hsl(208, 23%, 22%)",
        color: "white",

    }),
    option: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: state.isFocused && "hsl(207, 26%, 17%)",
        color: "white",
        paddingLeft: "20px",
        paddingTop: '16px',


    }),
    singleValue: (baseStyles) => ({
        ...baseStyles,
        color: "white",
        paddingLeft: "10px",
    }),
    menuList: (baseStyles) => ({
        '& div:nth-of-type(1)': {
            paddingTop: '16px',
        },
        '& div:nth-of-type(5)': {
            paddingBottom: '16px',
        },
    })
}




const options = [
    { value: "africa", label: "Africa" },
    { value: "america", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" }
]

const handleSelectvalue = (value) => {
    console.log(value.value)
}


export const Filter = () => {
    return <div>
        <Select onChange={handleSelectvalue} styles={styles} options={options} placeholder="Filter by Region" />
    </div>


}