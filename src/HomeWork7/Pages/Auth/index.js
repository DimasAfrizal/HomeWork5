import React from 'react';
import queryString from 'query-string';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken } from "../../reduxThing/acssTokenSlice"
import Login from '../Login/index';

const Home = () => {
    const accessToken = useSelector((state) => state.accessToken.value);
    const dispatch = useDispatch();

    useEffect(()=>{
        const parsed = queryString.parse(window.location.hash);
        dispatch(setAccessToken(parsed.access_token));
        console.log(accessToken);
    }, [accessToken, dispatch])

    return(
        <Login/>
    )

}
export default Home;