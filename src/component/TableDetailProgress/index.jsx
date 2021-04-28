import React from "react";
import "./style.scss";
import ProgressBar from "../../component/form-control/ProgessBar/index.jsx";

function TableDetailProgress({ data }) {
    const { types, stats } = data;
    console.log(stats);
    return (
        <table>
            <tr>
                <td>
                    <p className="text__title">HP</p>
                </td>
                <td>
                    <ProgressBar color={types[0].type.name} value={stats[0].base_stat} />
                </td>
            </tr>
            <tr>
                <td>
                    <p className="text__title">Attack</p>
                </td>
                <td>
                    <ProgressBar color={types[0].type.name} value={stats[1].base_stat} />
                </td>
            </tr>
            <tr>
                <td>
                    <p className="text__title">Defence</p>
                </td>
                <td>
                    <ProgressBar color={types[0].type.name} value={stats[2].base_stat} />
                </td>
            </tr>
            <tr>
                <td>
                    <p className="text__title">Sp.Attack</p>
                </td>
                <td>
                    <ProgressBar color={types[0].type.name} value={stats[3].base_stat} />
                </td>
            </tr>
            <tr>
                <td>
                    <p className="text__title">Sp.Defence</p>
                </td>
                <td>
                    <ProgressBar color={types[0].type.name} value={stats[4].base_stat} />
                </td>
            </tr>
            <tr>
                <td>
                    <p className="text__title">Speed</p>
                </td>
                <td>
                    <ProgressBar color={types[0].type.name} value={stats[5].base_stat} />
                </td>
            </tr>
            <tr>
                <td>
                    <p className="text__title">Total</p>
                </td>
                <td>
                    <p className="text__info">
                        {
                            stats.reduce((acc, cur) => {
                                const kq = acc.base_stat + cur.base_stat;

                                return {
                                    base_stat: kq,
                                };
                            }).base_stat
                        }
                    </p>
                </td>
            </tr>
        </table>
    );
}

export default TableDetailProgress;
