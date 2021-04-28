import React from "react";
import "./style.scss";

function TableDetailPokemon({ data }) {
    const { id, height, weight, abilities, types, forms } = data;

    const mapAbility = (data) => {
        return data.map((ability, index) => (
            <p
                key={index}
                className={`item__boxDetail item--${types[0].type.name} ${
                    ability.is_hidden === true && "item__hiddenAbility"
                }`}
            >
                {ability.ability.name}
            </p>
        ));
    };

    const mapType = (data) => {
        return data.map((TYPE, index) => (
            <span key={index} className={`tagDetail__type tagDetail__type--${TYPE.type.name}`}>
                {TYPE.type.name.charAt(0).toUpperCase() + TYPE.type.name.slice(1)}
            </span>
        ));
    };

    const heightConvert = (number) => {
        const array = String(number).match(/-?\d/g).map(Number);
        if (array.length > 1) {
            return parseFloat(`${array[0]}.${array[1]}`);
        } else {
            return parseFloat(`0.${array[0]}`);
        }
    };

    const weightConvert = (number) => {
        const array = String(number).match(/-?\d/g).map(Number);
        const pop = array.pop();
        return parseFloat(`${array.join("")}.${pop}`);
    };

    return (
        <table>
            <tr>
                <td>
                    <p className="text__title">ID</p>
                </td>
                <td>
                    <p className="text__info">
                        #
                        {`00${id}`.toString().length > 4
                            ? `00${id}`.toString().slice(2)
                            : `00${id}`.toString().length > 3
                            ? `00${id}`.toString().slice(1)
                            : `00${id}`}
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p className="text__title">Height</p>
                </td>
                <td>
                    <p className="text__info">
                        {heightConvert(height)}m <span>({(heightConvert(height) * 3.2808).toFixed(2)}ft)</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p className="text__title">Weight</p>
                </td>
                <td>
                    <p className="text__info">
                        {weightConvert(weight)}kg <span>({(weightConvert(weight) * 2.205).toFixed(1)}lbs)</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p className="text__title">Abilities</p>
                </td>
                <td>
                    <div className="group group__info">{mapAbility(abilities)}</div>
                </td>
            </tr>
            <tr>
                <td>
                    <p className="text__title">Type</p>
                </td>
                <td>
                    <p className="text__info">
                        <div className="tagDetail__block">{mapType(types)}</div>
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p className="text__title">Form</p>
                </td>
                <td>
                    <p className="text__info">
                        <span className={`tagDetail__type tagDetail__type--${types[0].type.name}`}>
                            {forms[0].name.toUpperCase()}
                        </span>
                    </p>
                </td>
            </tr>
        </table>
    );
}

export default TableDetailPokemon;
