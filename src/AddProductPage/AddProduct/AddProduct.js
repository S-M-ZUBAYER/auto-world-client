import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BtnSpinner from '../../components/BtnSpinner/BtnSprinner';
// import toast, { Toaster } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

// import Moment from 'moment';
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
const insertTime = new Date().getTime();

const AddProduct = () => {
    const [img, setImg] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        setLoading(true);
        const imgHostKey = process.env.REACT_APP_imgbb_key;
        event.preventDefault();
        const image = event.target.image.files[0];
        const location = event.target.location.value;
        const modelName = event.target.modelName.value;
        const price = event.target.price.value;
        const mileage = event.target.mileage.value;
        const engine = event.target.engine.value;
        const transmission = event.target.transmission.value;



        const formData = new FormData();
        formData.append('image', image);


        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbbKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        modelName,
                        image: imgData.data.url,
                        mileage,
                        location,
                        engine,
                        transmission,
                        price,
                        time,
                        date,

                        insertTime
                    }
                    fetch('https://auto-world-server-site.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                event.target.reset();
                                // <Toaster></Toaster>
                                setLoading(false)
                                // toast.success('product added Successfully');
                                navigate('/')

                            }
                            else {
                                // toast.error(data.message);
                            }

                        })
                }
            })
    }



    return (
        <div>
            <h2 className="text-3xl text-lime-400 font-bold mt-12 mb-5">
                Welcome to use this site to sell your product!!!
            </h2>
            <div className="mx-12 p-5 border rounded-lg border-8 text-slate-700 bg-slate-100 shadow-2xl">
                <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-3 mt-10'>
                    <input name="modelName" type="text" placeholder="Car Model Name" className="input w-full input-bordered" />
                    <div>

                        <input
                            type='file'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                            id='image'
                            name='image'
                            accept='image/*'
                            required
                        />
                    </div>
                    <input name="location" type="text" placeholder="Product Location" className="input w-full input-bordered" />
                    <input name="mileage" type="text" placeholder="Mileage" className="input w-full input-bordered" />
                    <input name="engine" type="text" placeholder="Engine" className="input w-full input-bordered" />
                    <input name="transmission" type="text" placeholder="transmission" className="input w-full input-bordered" />
                    <input name="date" type="text" placeholder="transmission" defaultValue={date} readOnly className="input w-full input-bordered" />

                    <input name="price" type="text" placeholder="price" className="input w-full input-bordered" />
                    <div >

                    </div>

                    <br />
                    <input className='btn btn-accent w-full col-span-2' type="submit" value={loading ? <BtnSpinner></BtnSpinner> : "Add Product"} />
                </form>
            </div >
        </div >
    );
};

export default AddProduct;