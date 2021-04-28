import React from "react";
import { Progress } from "reactstrap";
import "./style.scss";

function ProgressBar({ color, value }) {
    return (
        <Progress animated color={color} value={value}>
            {value}
        </Progress>
    );
}

export default ProgressBar;
