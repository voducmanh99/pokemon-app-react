import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function ListFilter({ onClickFilter, data, type }) {
    const listData = ["all", ...data].slice(0, -2);

    const handleClickFilterButton = (values) => {
        return onClickFilter(values.target.dataset.id);
    };

    const renderList = (data) => {
        return listData.map((list) => (
            <Link
                to={`/pokemon/${list}`}
                onClick={handleClickFilterButton}
                data-id={list}
                key={list}
                className={`button button--${list} ${type === list ? "button--disabled" : ""}`}
            >
                {list}
            </Link>
        ));
    };

    return (
        <div className="filter__container">
            <div className="filter__block">{renderList(data)}</div>
        </div>
    );
}

export default ListFilter;
