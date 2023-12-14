//import './RestaurantCard.css';
import { IMG_CDN_URL } from '../Constant/Constant';

const RestaurantCard = ({ name, cuisines, areaName, cloudinaryImageId, avgRatingString }) => {

    return (
        <>
            <div className='m-1 bg-orange-100 shadow-xl w-[50%]' >
                <img className='max-w-none  w-[100%]' src={IMG_CDN_URL + cloudinaryImageId} alt="" />
                <h2 className='child-header'>{name}</h2>
                <h3 className='child-header'>{cuisines.join(",")}</h3>
                <h4 className='child-header'>{areaName}</h4>
                <h5 className='child-header'>{avgRatingString} star</h5>
            </div>
        </>
    );
};

export default RestaurantCard;