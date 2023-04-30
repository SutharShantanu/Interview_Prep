import React, { useState } from "react";

const RandomNum = () => {
    const [num, setNum] = useState(0);

    const randomNum = () => {
        const newNum = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); // it will genrate a maximum safest random number
        setNum(newNum);
    };
    return (
        <div>
            <button onClick={randomNum}>Number is :- {num}</button>
        </div>
    );
};

export default RandomNum;
