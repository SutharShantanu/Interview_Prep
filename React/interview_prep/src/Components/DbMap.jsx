import React, { useEffect, useState } from "react";
import axios from "axios";

const DbMap = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        try {
            axios.get(`http://localhost:8080/users`).then((res) => {
                console.log(res.data);
                setData(res.data);
            });
        } catch (error) {
            console.log(error.message);
        }
    }, []);
    console.log(data);
    return (
        <div style={{ margin: "20px auto", width: "25%" }}>
            <table style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th
                            style={{
                                border: ".5px solid #ccc",
                                borderRadius: "8px",
                                padding: "8px",
                            }}>
                            Name
                        </th>
                        <th
                            style={{
                                border: ".5px solid #ccc",
                                borderRadius: "8px",
                                padding: "8px",
                            }}>
                            Age
                        </th>
                        <th
                            style={{
                                border: ".5px solid #ccc",
                                borderRadius: "8px",
                                padding: "8px",
                            }}>
                            Location
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((ele) => {
                        return (
                            <tr>
                                <td
                                    style={{
                                        border: ".5px solid #ccc",
                                        borderRadius: "8px",
                                        padding: "8px",
                                    }}>
                                    {ele.name}
                                </td>
                                <td
                                    style={{
                                        border: ".5px solid #ccc",
                                        borderRadius: "8px",
                                        padding: "8px",
                                    }}>
                                    {ele.age}
                                </td>
                                <td
                                    style={{
                                        border: ".5px solid #ccc",
                                        borderRadius: "8px",
                                        padding: "8px",
                                    }}>
                                    {ele.location}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DbMap;
