import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Section = ({ title, description }) => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div className="">
            <h1 className="text-base mb-2 text-black font-semibold">{title}</h1>
            {isVisible ? <div className="mb-2">{description}</div> : ""}
            <button
                onClick={() => setIsVisible(!isVisible)}
                className="bg-purple-500 font-semibold rounded text-white">
                {isVisible ? "Hide" : "Show"}
            </button>
        </div>

    )
}

const Instamart = () => {
    return (
        <>
            <Header />
            <Section
                title="Product Details"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl ipsum, volutpat id porttitor maximus, gravida in justo. Nullam mattis nibh non ipsum aliquam sollicitudin. Duis ante diam, feugiat sit amet volutpat vel, consequat sit amet sapien. Ut volutpat tellus velit, vel vulputate massa gravida id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris orci augue, porta ut feugiat non, imperdiet in dui. Praesent risus erat, euismod id magna quis, porta dignissim nisi. Suspendisse potenti. Etiam accumsan, magna et pharetra auctor, erat quam gravida ipsum, eget mollis orci elit vitae libero. Sed eget aliquet nisi. Aliquam hendrerit justo libero, ut sodales tellus cursus ac."
            />
            <Section
                title="About"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl ipsum, volutpat id porttitor maximus, gravida in justo. Nullam mattis nibh non ipsum aliquam sollicitudin. Duis ante diam, feugiat sit amet volutpat vel, consequat sit amet sapien. Ut volutpat tellus velit, vel vulputate massa gravida id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris orci augue, porta ut feugiat non, imperdiet in dui. Praesent risus erat, euismod id magna quis, porta dignissim nisi. Suspendisse potenti. Etiam accumsan, magna et pharetra auctor, erat quam gravida ipsum, eget mollis orci elit vitae libero. Sed eget aliquet nisi. Aliquam hendrerit justo libero, ut sodales tellus cursus ac."
            />
            <Section
                title="Team"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl ipsum, volutpat id porttitor maximus, gravida in justo. Nullam mattis nibh non ipsum aliquam sollicitudin. Duis ante diam, feugiat sit amet volutpat vel, consequat sit amet sapien. Ut volutpat tellus velit, vel vulputate massa gravida id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris orci augue, porta ut feugiat non, imperdiet in dui. Praesent risus erat, euismod id magna quis, porta dignissim nisi. Suspendisse potenti. Etiam accumsan, magna et pharetra auctor, erat quam gravida ipsum, eget mollis orci elit vitae libero. Sed eget aliquet nisi. Aliquam hendrerit justo libero, ut sodales tellus cursus ac."
            />
            <Footer />
        </>
    )
}

export default Instamart;