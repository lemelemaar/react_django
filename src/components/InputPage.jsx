import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const InputPage = () => {
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (text.trim()) {
            await axios.post('http://localhost:8000/api/texts/', { content: text });
            setText('');
            navigate('/display');
            }
        };

    return (
        <div>
            <h2>Enter Text</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
                <button type='submit'>Save</button>
            </form>
        </div>
        );
    };

export default InputPage;
