import { useState, useEffect } from "react"
import { SWIGGY_API_URL } from '../Constant/Constant';

const useRestuarant = () => {
    const [allRestuarant, setAllRestuarant] = useState([]);
    const [filteredData, setFilteredRestaurant] = useState([]);

    useEffect(() => {
        getRestaurantData();
    }, []);

    async function getRestaurantData() {
        try {
            let res = await fetch(SWIGGY_API_URL);
            const json = await res.json();

            // initialize checkJsonData() function to check Swiggy Restaurant data
            async function checkJsonData(jsonData) {
                for (let i = 0; i < jsonData?.data?.cards.length; i++) {

                    // initialize checkData for Swiggy Restaurant data
                    let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

                    // if checkData is not undefined then return it
                    if (checkData !== undefined) {
                        return checkData;
                    }
                }
            }
            // call the checkJsonData() function which return Swiggy Restaurant data
            const resData = await checkJsonData(json);
            console.log(resData[0]?.info.name, "resData");

            // update the state variable restaurants with Swiggy API data
            setAllRestuarant(resData);
            setFilteredRestaurant(resData);
        } catch (error) {
            console.log(error);
        }
    };

    return [allRestuarant, filteredData];
}

export default useRestuarant;
