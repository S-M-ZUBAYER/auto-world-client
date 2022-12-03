import React from 'react';

const CarCard = ({ product }) => {
    const { modelName, image, mileage, location, engine, transmission, price, time, date, } = product;
    return (
        <div className="max-w-lg p-4 shadow-xl rounded-xl bg-white text-black">
            <div className="flex justify-between items-center pb-4 text-left border-bottom">
                <div className="">
                    <small className="text-gray-400 text-sm">{time}, {date}</small>
                    <p className="text-base font-bold">
                        {modelName}
                    </p>
                </div>
                <div className="text-red-400 bg-red-200 p-1 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>

                </div>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />

                </div>
                <div className="">
                    <div className="flex justify-between my-2">
                        <p className="text-sm text-gray-400">Mileage: <span className="font-semibold text-black">{mileage}</span></p>
                        <p className="text-sm text-gray-400">Location: <span className="font-semibold text-black">{location}</span></p>
                    </div>
                    <div className="flex justify-between my-2">
                        <p className="text-sm text-gray-400">Engine: <span className="font-semibold text-black">{engine}</span></p>
                        <p className="text-sm text-gray-400">Transmission: <span className="font-semibold text-black">{transmission}</span></p>
                    </div>
                    <div className="flex justify-between my-2">
                        <p>{price}</p>
                        <button className="bg-red-400 text-white text-sm px-3 py-1">
                            More details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;