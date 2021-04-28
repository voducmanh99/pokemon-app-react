import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Header({ type, id }) {
    return (
        <div className={`header__container header__container--${type === "" || type === "all" ? "white" : type}`}>
            <Link to={`/pokemon/${type}`}>{id && <i className="fas fa-arrow-left text-white"></i>}</Link>
            <h2 className={`header__title header__title--${type}`}>PokéDex</h2>
        </div>
    );
}

export default Header;
