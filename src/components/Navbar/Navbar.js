import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../src/Assets/Image/auto World.jpg'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 border bg-gray-100">
                <div className="flex-1  mr-4">
                    <a className="btn btn-ghost normal-case text-xl">
                        <img className="h-12 w-12 font-semibold" src={img} alt="" /> AUTO WORLD
                    </a>
                </div>
                <div className="relative border text-left sm:visibility-hidden md:visibility-visible ">
                    <label for="UserEmail" className="sr-only"> Category </label>

                    <input
                        type="email"
                        id="UserEmail"
                        placeholder="Search"
                        className="w-full rounded-md border-gray-200 py-2.5 px-3 pr-10 shadow-sm sm:text-sm"
                    />

                    <span className="absolute inset-y-0 right-0 grid w-10 place-content-center">
                        <button
                            type="button"
                            className="rounded-full p-0.5 text-red-700"
                        >
                            <span className="sr-only">Submit</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </button>
                    </span>
                </div>
                <div className="flex-none">
                    <div className="">
                        <Link to='/addProduct'>
                            <button className="px-12 py-2 bg-red-200">
                                Sell a Car
                            </button>
                        </Link>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost ">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                            </div>
                        </label>
                        {/* <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;