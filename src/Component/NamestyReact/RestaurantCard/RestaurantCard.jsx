import React, { useEffect, useState } from 'react';
import './RestaurantCard.css';
import { cards, IMG_CDN_URL } from '../API/Constant';

const RestaurantCard = () => {
    const [searchText, setSearchText] = useState("");
    const [allRestuarant] = useState(cards);
    const [filteredData, setFilteredRestaurant] = useState(cards);

    const filterData = (searchText) => {
        const filterData = allRestuarant.filter((item) => {
            return item?.data?.data?.name?.toLowerCase().includes(searchText.toLowerCase());
        });
        setFilteredRestaurant(filterData);
    };

    useEffect(() => {
        getRestaurantData();
    }, []);

    async function getRestaurantData() {

        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await response.json();
        console.log(json);

    }

    return (
        <>
            <div className='search-bar'>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className='search-btn' onClick={() => filterData(searchText)}>Search</button>
            </div>
            <div className='cards'>
                {filteredData.map((restaurantList) => (
                    <div className='card-details' key={restaurantList?.data?.data?.id}>
                        <img src={IMG_CDN_URL + restaurantList?.data?.data?.cloudinaryImageId} alt="" />
                        <h2 className='child-header'>{restaurantList?.data?.data?.name}</h2>
                        <h3 className='child-header'>{restaurantList?.data?.data?.cuisines.join(",")}</h3>
                        <h4 className='child-header'>{restaurantList?.data?.data?.lastMileTravel.toFixed("1")} minutes</h4>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RestaurantCard;