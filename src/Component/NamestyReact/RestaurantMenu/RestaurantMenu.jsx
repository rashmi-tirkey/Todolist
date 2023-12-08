import { useParams } from 'react-router';
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import "./RestaurantMenu.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import useRestaurantMenu from '../Hooks/useRestaurantMenu';
import { IMG_CDN_URL, SWIGGY_MENU_API_URL, RESTAURANT_TYPE_KEY, MENU_ITEM_TYPE_KEY } from '../Constant/Constant';

const RestaurantMenu = () => {
    const { resId } = useParams();

    const [restaurant, menuItems] = useRestaurantMenu(
        resId,
        SWIGGY_MENU_API_URL,
        RESTAURANT_TYPE_KEY,
        MENU_ITEM_TYPE_KEY
    )

    return (
        <>
            <Header />
            {!restaurant ? (<ShimmerSimpleGallery card imageHeight={200} caption />) : (<div className='restaurant-menu-wrapper' >
                <div className='restaurant-menus'>
                    <div className='menu-img'>
                        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt={restaurant?.name} />
                    </div>
                    <div className='items-name'>
                        <h2>{restaurant?.name}</h2>
                        <h3>{restaurant?.cuisines?.join(" ,")}</h3>
                        <h4>{restaurant?.avgRating} star</h4>
                        <h5>{restaurant?.costForTwoMessage}</h5>
                    </div>
                </div>
                <ul>{menuItems?.map((menuList) => <li key={menuList.id}>{menuList.name}</li>)}</ul>
            </div>)}
            <Footer />
        </>
    )
}

export default RestaurantMenu;
