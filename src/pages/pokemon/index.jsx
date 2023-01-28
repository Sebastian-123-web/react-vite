import { Card, CardMedia, Container, Grid, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import { getDataFromPokemon } from "../../services";
import PokemonDetail from "../../components";

const Home = () => {
    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";
    /*
        vamos a crear una variable la cual se encargue de guardar la lista de pokemones
        realizar Hook
    */
    const[pokemons,setPokemons] = useState([])

   /*
        debemos crear una funcion la cual se encargue de ejecutar el
        getDataFromPokemon y la data retorne esa funcion guardarlo usando setPokemons
   */

    const fetchPokemonList = async()=>{
        const listPokemons = await getDataFromPokemon()
        /*
            ahora como ya recuperamos la lista hay que usar la funcion 
            setPokemon para poder guardarlo esa lista de pokemon
        */
        console.log("listadepokemones",listPokemons.results);
        setPokemons(listPokemons.results)
    }
/*
    en react hay una funcion llamada useEffect la cual se ejecuta cuando
    la pagina esta iniciando, vamos a usar useEffect si queremos ejecutar
    algo al inicio de la aplicacion
    la esctructura de useEffect es la siguiente
*/

useEffect(()=>{
    //Aca llamamos la funcion a ejecutar
    fetchPokemonList()
    /*
        importante por ahora los useEffect debemos colocarle un array vacio
        esto se hace para evitar un bucle en la funcion de peticion
    */
},[])

    return(
        <Container>
            <h1>POKEDEX G19</h1>
            <Grid container spacing={3}>
                {pokemons.length > 0 && pokemons.map( (pokemon, index) => (
                    //aca el codigo visual
                    <Grid item md={4} lg={4} sm={12} xs={12}>
                        <Card className="card-pokemon">
                            <CardMedia 
                                component="img"
                                className="img-pokemon"
                                image={`${imgUrl}${index + 1}.svg`}
                            />
                            <CardContent>
                                <h3 className="name-pokemon">{pokemon.name}</h3>
                            </CardContent>
                            <PokemonDetail nombre={pokemon.name} />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Home;