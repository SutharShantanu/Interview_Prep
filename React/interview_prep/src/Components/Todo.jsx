import axios from "axios";
import React, { useEffect, useState } from "react";

const Todo = () => {
    const [title, setTitle] = useState("");
    const [data, setData] = useState([]);

    const handleTodo = (e) => {
        e.preventDefault();
        let obj = { name: title };
        try {
            axios.post(`http://localhost:8080/todos`, obj).then((res) => {
                alert("data added successfully !");
                setTitle("");
                // console.log(res.data);
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        try {
            axios.get(`http://localhost:8080/todos`).then((res) => {
                // console.log(res.data);
                setData(res.data);
            });
        } catch (error) {
            console.log(error.message);
        }
    }, [data]);

    const handleEdit = () => {};
    const handleDelete = () => {};
    return (
        <div style={{ margin: "20px auto", width: "25%" }}>
            <form onSubmit={handleTodo}>
                <label htmlFor="text">Todo</label>
                <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Add todo here"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            <table style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th
                            style={{
                                border: ".5px solid #ccc",
                                borderRadius: "8px",
                                padding: "8px",
                            }}>
                            ID
                        </th>
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
                            Edit
                        </th>
                        <th
                            style={{
                                border: ".5px solid #ccc",
                                borderRadius: "8px",
                                padding: "8px",
                            }}>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.length ? (
                        data.map((e) => {
                            return (
                                <tr>
                                    <td
                                        style={{
                                            border: ".5px solid #ccc",
                                            borderRadius: "8px",
                                            padding: "8px",
                                        }}>
                                        {e.id}
                                    </td>
                                    <td
                                        style={{
                                            border: ".5px solid #ccc",
                                            borderRadius: "8px",
                                            padding: "8px",
                                        }}
                                        key={e.id}>
                                        {e.name}
                                    </td>
                                    <td
                                        style={{
                                            border: ".5px solid #ccc",
                                            borderRadius: "8px",
                                            padding: "8px",
                                        }}>
                                        <button onClick={handleEdit}>
                                            Edit
                                        </button>
                                    </td>
                                    <td
                                        style={{
                                            border: ".5px solid #ccc",
                                            borderRadius: "8px",
                                            padding: "8px",
                                        }}>
                                        <button onClick={handleDelete}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <h1>Todo is Empty</h1>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Todo;
