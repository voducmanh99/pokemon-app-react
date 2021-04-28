import React from 'react';
import BoxPokemon from '../BoxPokemon';


function ListBox({ data }) {
    const renderPokemon = () => {
        return data.map((pokemon, index) => <BoxPokemon
            key={pokemon.id}
            data={data[index]}
            />
        )
    } 
    return (
        <>{renderPokemon()}</>  
    );
}

export default ListBox;