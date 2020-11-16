import React, {useState} from 'react';
import axios from 'axios';

const Signup = (props) => {
    const [data, setData] = useState('');
    const getResponse = () => {
        axios.get('http://localhost:5000/').then((res) => {
            setData(res.data.testing);
        })
    };
    const clearData = () => {
        console.log('Clearing');
        setData('');
    };

    return (
        <div className = "signup">
            <h1>Sign Up</h1>
            <form>
            <input type="text" name="username" placeholder="username"></input>


            <input type="submit"></input>
            </form>
            <button onClick = {getResponse}>Get Data</button>
            <button onClick = {clearData}>Clear Data</button>
        </div>
    );
}

export default Signup;