import React, { useEffect, useState } from 'react';
import CarCard from '../CarCard/CarCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://auto-world-server-site.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);
    return (
        <div className="bg-gray-100">
            <div className="grid md:gap-4 mx-2 md:mx-8 my-2 md:my-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    products.map(product => <CarCard
                        product={product}
                    ></CarCard>)

                }
            </div>


        </div>
    );
};

export default Home;