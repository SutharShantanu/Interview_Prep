import React, { useState } from "react";

const BGChange = () => {
    const [color, setColor] = useState("white");
    
    const handleChange = () => {

        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const MainColor = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
        setColor(MainColor);
    };
    return (
        <div>
            <h1
                style={{ backgroundColor: color, cursor: "pointer" }}
                onClick={handleChange}>
                Background color can change if you click on this
            </h1>
        </div>
    );
};

export default BGChange;
