import React, { useState } from "react";

const RandomNum = () => {
    const [num, setNum] = useState(0);
    const randomNum = () => {
        const newNum = Math.floor(Math.random());
        setNum(newNum);
    };
    return (
        <div>
            <button onClick={randomNum}>{num}</button>
        </div>
    );
};

export default RandomNum;
