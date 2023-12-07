import React, { useState } from 'react';
import './RestaurantCard.css';
import { SWIGGY_API_URL, IMG_CDN_URL } from '../API/Constant';
import Shimmer from '../Shimeer/Shimmer';
import useRestuarant from '../Hooks/useRestuarant';
import { filterData } from '../Hooks/util';

const RestaurantCard = () => {
    const [searchText, setSearchText] = useState("");
    const [allRestuarant, filteredData] = useRestuarant(SWIGGY_API_URL);
    const [filterredData, setFilteredRestaurants] = useState(null)

    const searchData = (searchText, restaurants) => {
        if (searchText !== "") {
            const filteredData = filterData(searchText, restaurants);
            setFilteredRestaurants(filteredData);
        } else {
            setFilteredRestaurants(restaurants);
        }
    };


    return (
        <>
            <div className='search-bar'>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className='search-btn' onClick={() =>
                    searchData(searchText, allRestuarant)
                }>Search</button>
            </div>
            {allRestuarant.length === 0 ?
                (<Shimmer />) : (<div className='cards'>
                    {(filterredData === null ? filteredData : filterredData).map((restaurantList) => (
                        <div className='card-details' key={restaurantList?.info?.id}>
                            <img src={IMG_CDN_URL + restaurantList?.info?.cloudinaryImageId} alt="" />
                            <h2 className='child-header'>{restaurantList?.info?.name}</h2>
                            <h3 className='child-header'>{restaurantList?.info?.cuisines.join(",")}</h3>
                            <h4 className='child-header'>{restaurantList?.info?.areaName}</h4>
                            <h5 className='child-header'>{restaurantList?.info?.avgRatingString} star</h5>
                        </div>
                    ))}
                </div>)}
        </>
    );
};

export default RestaurantCard;