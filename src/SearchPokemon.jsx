
import { useState } from "react";

const Searchpokemon = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({});
  const [imag, setImag] = useState("");

  const fetchUser = async () => {
    try {
      //const response = await fetch(`https://api.github.com/users/${search}`);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search}`
      );
      const data = await response.json();
      setUser(data);
      setImag("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/");
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Buscador de Pokemon</h1>
        <div className="grid">
          <input
            type="text"
            placeholder="Ingrese el nombre del Pokemon"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <button onClick={fetchUser}>Buscar</button>
        </div>
        <article>
          <div className="container">
            <img src={ user.id ? imag + user.id + `.svg` : `https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png` } alt="" width="135" />
            <p>Nombre: { user.name ? user.name : 'Pokebola' }</p>
            {/* <img src={user.sprites.other.dream_world.front_default} alt="avatar" /> */}
            {/* <p>tipo: {user.types[0].type.name} </p> */}
          </div>
        </article>
      </div>
    </div>
  );
};

export default Searchpokemon;
