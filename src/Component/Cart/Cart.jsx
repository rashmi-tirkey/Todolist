import React, { useState } from "react";

const AddToCart = () => {
    const [product, setProduct] = useState([]);
    const [productPrice, setProductPrice] = useState(0);
    const [productName, setProductName] = useState([]);
    const [count, setCount] = useState(0);

    const clickHandle = () => {
        setProductName([...productName, product]);
        setProduct("");
    }

    const incrmentPrice = () => {
        setCount(count + 1);
    }

    const decrementPrice = () => {
        setCount(count - 1);
    }
    return (
        <>
            <h1>AddToCart</h1>
            <div>
                <input type="text" placeholder="Enter Product Name" value={product} onChange={(e) => setProduct(e.target.value)} />
                <input type="number" placeholder="Enter Product Price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                <button onClick={clickHandle}>Add</button>
            </div>
            <div>
                <h1>Product List</h1>
                <div>
                    {productName.map((item, index) => {
                        return (
                            <div key={index}>
                                <p>{item}</p>
                                <div> <input type="number" value={count} /></div>
                                <button onClick={incrmentPrice}>+</button>
                                <button onClick={decrementPrice}>-</button>
                            </div>
                        )
                    })}
                    <p>Product Price</p>
                    <p>Total Price</p>
                </div>
            </div>
        </>
    );
};

export default AddToCart;