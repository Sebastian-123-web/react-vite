import React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Container, Grid, TextField, FormControl, InputLabel, Select, MenuItem, CircularProgress } from "@mui/material";
import { getDataFromPokemon } from "../../services";/* consume servicio */
import { Link } from "react-router-dom";

const Flags = () => {

    const [ countries, setCountries ] = useState([]);
    const [ region, setRegion ] = useState("");

    const fetchCountries = async() => {
        const response = await getDataFromPokemon('https://restcountries.com/v3.1/all');
        setCountries(response)
        console.log(response)
    }

    const handleRegion = async(e) => {
        setRegion(e.target.value)
        /* 
            vamos a evaluar si el valor es igual a all entonces ejecutar
            la funcion fetchCountries
        */
       if(e.target.value === "all"){
        fetchCountries();
        return;
       }
       /* 
           primero debemos limpiar para poder llenarlo con la nueva
           informacion
       */
       setCountries([]);
       const response = await getDataFromPokemon(
           `https://restcountries.com/v3.1/region/${e.target.value}`
       )
       setCountries(response)
    }

    const handleSearchCountry = (e) => {
        const countryName = e.target.value;
        if(countryName.length === 0){
            fetchCountries();
        }
        if(countryName.length > 3){
            /*
                aca iniciamos la busqueda
                para poder hacer la busqueda debo transformar todo a text
                UPPERCASE o lowercase
            */
           const filterCountries = countries.filter( (country) => 
                country.name.official.toUpperCase().includes(countryName.toUpperCase())
            );
            setCountries(filterCountries);
        }
    }
        
    useEffect(() =>{
        fetchCountries()
    }, [])

    return (
        <Container>
            <Grid container spacing={3} mt={5}>
                <Grid item md={6}>
                    <TextField
                        label="Search for country"
                        fullWidth
                        onChange={handleSearchCountry}
                    />
                </Grid>
                <Grid item md={6}>
                    <FormControl fullWidth>
                        <InputLabel>Filter by Region</InputLabel>
                        <Select
                            label="Filter by region"
                            onChange={handleRegion}
                            value={region}
                        >
                            <MenuItem value="all">All the Regions</MenuItem>
                            <MenuItem value="Africa">Africa</MenuItem>
                            <MenuItem value="Asia">Asia</MenuItem>
                            <MenuItem value="Americas">Americas</MenuItem>
                            <MenuItem value="Europe">Europe</MenuItem>
                            <MenuItem value="Oceania">Oceania</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                {
                    countries.length > 0 ? (
                        countries.map((country) => (
                            <Grid item md={3} xs={12}>
                                <Link to={`/flags/detail/` + country.name.common}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            image={country.flags.svg}
                                        />
                                        <CardContent>
                                            <h4>{ country.name.common }</h4>
                                            <p>Population: {country.population}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        ))
                    ) : (
                        <div>
                            <CircularProgress />
                            <h4>Cargando...</h4>
                        </div>
                    )
                }
            </Grid>
            {
                countries.length && countries.map( (country, index) => (
                    <p>{country.name.common}</p>
                ) )
            }

        </Container>
        );
}

export default Flags;