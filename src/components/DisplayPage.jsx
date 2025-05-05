import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayPage = () => {
    const [texts, setTexts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/texts/').then((res) => {
            setTexts(res.data);
            });
        }, []);

    return (
        <div>
            <h2>Saved Texts</h2>
            <ul>
                {texts.map((item) => (
                    <li key={item.id}>{item.content}</li>
                    ))}
            </ul>
        </div>
        );
    };

export default DisplayPage;
