import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import pokemonApi from "../../api/pokemonApi";
import BoxPokemonDetail from "../../component/BoxPokemonDetail";
import Header from "../../component/Header/";
import Loading from "../../component/Loading";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [type, setType] = useState("");
    let id = useParams().name;

    const getPokemonDetail = async (id) => {
        const PokeList = await pokemonApi.get(id);
        const data = PokeList;
        setData(data);
        setType(data.types[0].type.name);
        setLoading(false);
    };

    useEffect(() => {
        getPokemonDetail(id);
    }, []);

    return (
        <div className="App-container">
            <Header type={type} id={id} />
            {loading && <Loading />}
            {!loading && (
                <>
                    <BoxPokemonDetail data={data} />
                </>
            )}
        </div>
    );
}

export default Detail;
