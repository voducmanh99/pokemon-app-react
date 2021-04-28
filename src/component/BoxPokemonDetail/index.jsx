import React from "react";
import TableDetailPokemon from "../TableDetailPokemon";
import TableDetailProgress from "../TableDetailProgress";
import imageQuestion from "../../assets/image/questionmark.png";
import "./style.scss";

function BoxPokemonDetail({ data }) {
    const { name, sprites } = data;
    const image = sprites.other.dream_world.front_default;
    const imagePreventive = sprites.front_default;

    return (
        <div className="detail">
            <h1 className="detail__name">{name.toUpperCase()}</h1>
            <div className="detail__info">
                <div className="detail__info--bio">
                    <div className="detail__info--block detail__info--deg">
                        <TableDetailPokemon data={data} />
                    </div>
                </div>
                <div className="detail__info--block detail__info--mar">
                    <img src={image || imagePreventive || imageQuestion} alt="" />
                </div>
                <div className="detail__info--bio">
                    <div className="detail__info--block detail__info--degR">
                        <TableDetailProgress data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoxPokemonDetail;
