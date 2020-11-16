import React, {useState} from 'react';
import axios from 'axios';

const Fetcher = (props) => {
    const [data, setData] = useState('');

    // Run on click when we want to get data from server
    const getResponse = () => {
        axios.get('http://localhost:5000/').then((res) => {
            setData(res.data.testing);
        })
    };

    // clears state
    const clearData = () => {
        console.log('Clearing');
        setData('');
    };

    return (
        <div className = "fetcher">
            <h1>Fetcher Component</h1>
            <p>{data}</p>
            <button onClick = {getResponse}>Get Data</button>
            <button onClick = {clearData}>Clear Data</button>
        </div>
    );
}

export default Fetcher;