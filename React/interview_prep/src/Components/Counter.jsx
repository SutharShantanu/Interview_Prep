import React from "react";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    };
    const handleRemove = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <button value={count} disabled={count === 0} onClick={handleRemove}>
                -1
            </button>
            <h1>{count}</h1>
            <button value={count} onClick={handleAdd}>
                +1
            </button>
        </div>
    );
};

export default Counter;
