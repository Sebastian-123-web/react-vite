import { useState } from "react";
import { Button, Dialog, DialogContent, Grid, Slider } from "@mui/material";

import { getDataFromPokemon } from "../services";

const PokemonDetail = (props) => {

    const [abrir, setAbrir] = useState(false);

    const [pokemonData, setPokemonData] = useState({});

    const fetchDetailFromPokemon = async () => {
        const pokemon = await getDataFromPokemon(props.url)
        setPokemonData(pokemon);
    }

    const handleOpenDialog = async() => {
        //cuando se abre el modal es true
        if(!abrir){
            await fetchDetailFromPokemon()
        }

        setAbrir(!abrir)
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpenDialog}>Detalle</Button>
            <Dialog 
                fullWidth={"md"} 
                open={abrir} 
                maxWidth={"md"} 
                onClose={handleOpenDialog}>
                <DialogContent>
                    {Object.keys(pokemonData).length > 0 &&(
                        <div>
                            <h2>{props.nombre}</h2>
                        </div>
                    )}
                    <Button onClick={handleOpenDialog}>Cerrar</Button> 
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default PokemonDetail;