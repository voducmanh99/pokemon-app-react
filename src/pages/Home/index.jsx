import React from "react";
import { useEffect, useState } from "react";
import Loading from "../../component/Loading";
import pokemonApi from "../../api/pokemonApi";
import ListBox from "../../component/ListBox";
// import SearchForm from '../../feature/Home/component/searchForm';
import Header from "../../component/Header/";
import ListFilter from "../../feature/Home/component/ListFilter";
import typeApi from "../../api/typeApi";
import { useParams } from "react-router";
import Footer from "../../component/Footer";

function Home(props) {
    const url = useParams();

    const [allPokemon, setAllPokemon] = useState([]);
    const [allList, setAllList] = useState([]);
    const [type, setType] = useState(url.hasOwnProperty("type") ? url.type : "all");
    const [loading, setLoading] = useState(true);
    const [btnLoading, setBtnLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const amount = 24;

    const getAllPokemon = async () => {
        const PokeList = await pokemonApi.getAll(amount, offset);
        const data = PokeList.results;

        const createPokemonObj = (result) => {
            return result.map(async (item) => await pokemonApi.get(item.name));
        };

        const result = createPokemonObj(data);

        Promise.all(result).then((data) => {
            let newAllPokemon;
            if (type) {
                if (type === "all") {
                    newAllPokemon = [...allPokemon, ...data];
                } else {
                    newAllPokemon = [...data];
                }
            }
            setAllPokemon(newAllPokemon);
            setLoading(false);
            setBtnLoading(false);
        });
    };

    const getPokemonForType = async (id) => {
        const PokeList = await typeApi.get(id);
        const data = PokeList.pokemon;

        const createPokemonObj = (result) => {
            return result.map(async (item) => await pokemonApi.get(item.pokemon.name));
        };

        const result = createPokemonObj(data);

        Promise.all(result).then((data) => {
            let newAllPokemon;
            if (type) {
                if (type === "all") {
                    newAllPokemon = [...allPokemon, ...data];
                } else {
                    newAllPokemon = [...data];
                }
            }
            setAllPokemon(newAllPokemon);
            setLoading(false);
            setBtnLoading(false);
        });
    };

    const getAllType = async () => {
        const TypeList = await typeApi.getAll();
        const data = TypeList.results;
        const _data = data.map((list) => list.name);
        setAllList(_data);
    };

    // const getPokemonSearch = async (values) => {
    //     const PokeSearch = await pokemonApi.get(values.content);
    //
    //     const searchPokemon = [PokeSearch]
    //     setAllPokemon(searchPokemon)
    //

    useEffect(() => {
        if (type === "all") {
            getAllPokemon();
        } else {
            getPokemonForType(type);
        }
        getAllType();
    }, [offset, type]);

    const handleOnClickSeenMore = () => {
        const newOffset = offset + amount;
        setOffset(newOffset);
        setBtnLoading(true);
    };

    // const handleOnSubmitForm = (values) => {
    //
    //     getPokemonSearch(values)
    // }

    const handleClickFilter = (values) => {
        setAllPokemon([]);

        if (values) {
            if (values === "all") {
                setType(values);
            } else {
                setType(values);
                setOffset(0);
            }
        }
        setLoading(true);
        setBtnLoading(true);
    };

    return (
        <div className="App-container">
            <Header type={type} />
            {loading && <Loading />}
            {!loading && (
                <>
                    <div className="container">
                        {/* <SearchForm onSubmit={handleOnSubmitForm}/> */}
                        <ListFilter type={type} onClickFilter={handleClickFilter} data={allList} />
                        <div className="all-container">
                            <ListBox data={allPokemon} />
                        </div>
                    </div>
                    {(type === "" || type === "all") && (
                        <button className="btn__block" onClick={handleOnClickSeenMore} disabled={btnLoading}>
                            {btnLoading ? (
                                <i className="fas fa-circle-notch fa-spin"></i>
                            ) : (
                                <i className="fal fa-plus"></i>
                            )}
                        </button>
                    )}
                </>
            )}
            {!loading && <Footer />}
        </div>
    );
}

export default Home;
