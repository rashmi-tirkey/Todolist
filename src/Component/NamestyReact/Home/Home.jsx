import React, { useState } from 'react';
import { ShimmerSimpleGallery } from "react-shimmer-effects";

import { SWIGGY_API_URL } from '../Constant/Constant';
import useRestuarant from '../Hooks/useRestuarant';
import { filterData } from '../Hooks/util';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import { Link } from 'react-router-dom';
import useOnline from '../Hooks/useOnline';

const Home = () => {
    const [searchText, setSearchText] = useState("");
    const [allRestuarant, filteredData] = useRestuarant(SWIGGY_API_URL);
    const [filterredData, setFilteredRestaurants] = useState(null)

    const isOnline = useOnline();

    const searchData = (searchText, restaurants) => {
        if (searchText !== "") {
            const filteredData = filterData(searchText, restaurants);
            setFilteredRestaurants(filteredData);
        } else {
            setFilteredRestaurants(restaurants);
        }
    };

    if (!isOnline) {
        return <h1>🔴Offline, please check your internet connection</h1>
    }

    return (
        <>
            <div className='text-center mt-3'>
                <input
                    type="text"
                    placeholder="Search"
                    className='border-4 border-purple-400 px-16 outline-none'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className='ml-2 bg-red-400 rounded-sm p-1' onClick={() =>
                    searchData(searchText, allRestuarant)
                }>Search</button>
            </div>
            {allRestuarant.length === 0 ?
                (<ShimmerSimpleGallery card imageHeight={200} caption />) : (
                    <div className='flex flex-wrap mt-[30px]'>
                        {(filterredData === null ? filteredData : filterredData).map
                            ((restaurant) => (
                                <Link
                                    to={"/restaurant/" + restaurant?.info?.id}
                                    key={restaurant?.info?.id}>
                                    <RestaurantCard  {...restaurant?.info} />
                                </Link>
                            ))}
                    </div>)}
        </>
    );
};

export default Home;