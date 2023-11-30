import React from 'react';
import { useParams } from 'react-router';

const Home = () => {
    const { url } = useParams();
    console.log(url, "url");
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let complete = params.get("complete");

    return (
        <div>
            <h1>Home</h1>
            <div>{complete}</div>
        </div>
    )
}

export default Home;