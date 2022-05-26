import React from 'react'
import MainContext from './MainContext'

const MainState = (props) => {
    const getUser = async () => {
        const res = await fetch('/api/auth/getuser', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const json = await res.json();
        if (res.status === 200) {
            console.log(json);
            return json;
        }
        else {
            console.log(json);
            return json;
        }
    }

    return (
        <MainContext.Provider value={{ getUser }}>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainState