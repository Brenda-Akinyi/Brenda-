import React, { useState, useEffect } from "react";
import "../App.css";

const list = () => {
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState([]);

    const addItem = () => {
        if (inputValue.trim() !== "") {
            setItems([...items, inputValue]);
            setInputValue("");
        }
    };

    return (
        <div className="brenda-container">
            <div className="brenda-card">
                <h2 className="brenda-title">Dynamic List Manager</h2>
                <div className="input-container">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter an item"
                        className="brenda-input"
                    />
                    <button onClick={addItem} className="brenda-button">Add Item</button>
                </div>
                <div className="brenda-list">
                    {items.length === 0 ? (
                        <p>No Activity added</p>
                    ) : (
                        <ul>
                            {items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export  default list;