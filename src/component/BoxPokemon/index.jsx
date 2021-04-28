import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import imageQuestion from "../../assets/image/questionmark.png";

function BoxPokemon({ data }) {
    const { sprites, name, id, types } = data;
    const image = sprites.other.dream_world.front_default;
    const imagePreventive = sprites.front_default;
    const namePokemon = name.charAt(0).toUpperCase() + name.slice(1);
    const type = types[0].type.name;

    return (
        <Link to={`/detail-pokemon/${name}`} key={id}>
            <div className={`item__box item__box--${type}`}>
                <div className="img__block">
                    <img src={image || imagePreventive || imageQuestion} alt="" />
                </div>
                <div className="info__block">
                    <span className="info__number">
                        #
                        {`00${id}`.toString().length > 4
                            ? `00${id}`.toString().slice(2)
                            : `00${id}`.toString().length > 3
                            ? `00${id}`.toString().slice(1)
                            : `00${id}`}
                    </span>
                    <h5 className="info__name">{namePokemon}</h5>
                    {/* <small>Type: <span>{type}</span></small> */}
                    <div className="tag__block">
                        {types.map((type) => (
                            <span className={`tag__type tag__type--${type.type.name}`}>{type.type.name}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
export default BoxPokemon;
