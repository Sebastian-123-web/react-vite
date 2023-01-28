import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "../pages/pokemon";
import Searchpokemon from "../SearchPokemon";
import AppEjemplo from "../AppEjemplo";
import Header from "../components/Header";
import Flags from "../pages/Flags";
import Detail from "../pages/Flags/Detail";
import SearchImage from "../pages/pixabay";

const Router = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/Searchpokemon" element={ <Searchpokemon /> } />
                <Route path="/AppEjemplo" element={ <AppEjemplo /> } />
                <Route path="/Flags" element={ <Flags /> } />
                <Route path="/flags/detail/:name" element={ <Detail /> } />
                <Route path="/pixabay" element={ <SearchImage /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;