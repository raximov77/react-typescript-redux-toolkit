import axios from "axios"
import { useContext, useEffect } from "react"
import CountryItem from "./CountryItem"
import { Context } from "../context/context"

export interface CountryType {
    name:string,
    capital:string,
    img:string,
    flagIcon:string,
    population:number
}


const CountryLIst = () => {
    const {countries, setCountries, refresh} = useContext(Context)

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then(res => {
            setCountries(res.data.splice(0, 20).map((item:any) => {
               const data:CountryType = {
                    name:item.name.common,
                    capital:item.capital[0],
                    population:item.population,
                    img:item.flags.png,
                    flagIcon:item.flag
               } 
               return data
            }))
        })
    }, [refresh])
    console.log(countries);
    
  return (
    <div className="p-5 flex justify-between flex-wrap gap-5">
        {countries.map((item:CountryType, index:number) => <CountryItem key={index} item={item}/>)}
    </div>
  )
}

export default CountryLIst