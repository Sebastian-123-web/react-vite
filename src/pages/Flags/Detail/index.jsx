import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDataFromPokemon } from "../../../services";

const Detail = () => {

    let { name } = useParams();
    const history = useNavigate();

    const [ country, setCountry ] = useState({});
    const [ currencies, setCurrencies] = useState({});

    const fetchCountry = async() => {
        const response = await getDataFromPokemon(`https://restcountries.com/v3.1/name/${name}`);
        setCountry(response[0]);
        setCurrencies(country);
    }

    useEffect( () => {
        fetchCountry();
    }, [] )

    return (
        <div className="container mt-5">
            <div>
                <button className="btn btn-dark" id="btn" onClick={ ()=>history(-1) }>Back</button>
            </div>
            {
                Object.keys(country).length > 0 && (
                    <div className="row mt-5">   
                        <div className="col-md-5">
                            <img src={country.flags.svg} alt="Bandera" width={400} />
                        </div>
                        <div className="col-md-7">
                            <h1 className="mb-3"> { country.name.common } </h1>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 p-0">
                                        <p><b>Native Name:</b> {country.name.official} </p>
                                        <p><b>Population:</b> {country.population} </p>
                                        <p><b>Region:</b> { country.region } </p>
                                        <p><b>Sub Region:</b> { country.subregion } </p>
                                        <p><b>Capital:</b> { country.capital } </p>
                                    </div>
                                    <div className="col-md-6 p-0">
                                        <p><b>Top Level Domain:</b> {country.tld} </p>
                                        <p><b>Currencies: </b>
                                            {
                                                Object.keys(country.currencies).map( (currency) => (
                                                    <span>{ currency }</span>
                                                ))
                                            }
                                        </p>
                                        <p><b>Lenguages: </b>
                                        { 
                                            Object.keys(country.languages).map( (language) => (
                                                <span> { language }</span>
                                            ))
                                        } </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p><b>Border Conuntries:</b> <span className=""> { " " + country.borders } </span> </p>
                            </div>
                        </div>
                    </div>

                )
            }
            
        </div>
    )
}

export default Detail;