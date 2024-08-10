import {useEffect, useState } from "react";


import Greeter from "./Greeter";



const App = () => {

  
    const [username, setUsername] = useState('');

    const [loaded, setLoaded] = useState(false);

    const setUsernameChange = e => {
        setUsername(e.target.value);
    }

    useEffect(() => {
       const timer = setTimeout(() => {
            setLoaded(true);
       }, 3000);

       return () => clearTimeout(timer);
    },[]);

    if (!loaded){
        return (
            <>
                <h1>Website Loading...</h1>
                <button onClick={setLoaded}>Getting Impatient?</button>
            </>
        );
    }else{
        return(
            <>
                <h1>Something Obvious</h1>
                <Greeter phrase='Hey Whats Up!?' name='Josh'/>
                <Greeter phrase='Whats crackalakin' name='Anthony'/>
                <Greeter phrase='Hows ya motha' name='Xander'/>
                <input value={username} onChange={setUsernameChange} />
                <p>You are Logging in as {username} </p>
            </>
        );
    }

};

export default App;