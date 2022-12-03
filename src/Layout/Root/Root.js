import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
// import Navbar from '../../componets/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile bg-gray-100">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side border ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

                    <div className="bg-white">
                        <details className="group bg-gray-50 px-2 py-4 border " open>
                            <summary className="flex cursor-pointer items-center justify-between">
                                <div className="flex gap-2 font-normal text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                    </svg>

                                    Basic Information
                                </div>

                                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <p className="mt-4 leading-relaxed text-left text-gray-700">
                                Information Not Available
                            </p>
                        </details>


                        <details className="group border bg-gray-50 px-2 py-4">
                            <summary className="flex cursor-pointer items-center justify-between">
                                <h2 className="flex gap-2 font-normal text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    Car Cost
                                </h2>

                                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 opacity-100 group-open:opacity-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 opacity-0 group-open:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            {/* <p className="mt-4 leading-relaxed text-left text-gray-700">
                                car cost Available
                            </p> */}
                            <div className="flex justify-between my-3">
                                <div className=" bg-stone-50  shadow-lg pl-2 pr-6 py-1 ">
                                    <small className="text-gray-400">Price From</small>
                                    <p className="font-semibold">$21000</p>
                                </div>
                                <div className=" bg-stone-50  shadow-lg pl-2 pr-6 py-1 ">
                                    <small className="text-gray-400">Price From</small>
                                    <p className="font-semibold">$34000</p>
                                </div>

                            </div>
                            <input type="range" min="0" max="100" value="40" className="range range-success" />
                            <div className="text-left">
                                <div className="py-1 px-2 shadow-lg">
                                    <input type="checkbox" className="checkbox checkbox-xs mr-2 w-3 h-3 rounded-sm" />
                                    <small className="text-xs">Possible bargaining</small>
                                </div>
                                <div className="py-1 px-2 shadow-lg">
                                    <input type="checkbox" className="checkbox checkbox-xs mr-2 w-3 h-3 rounded-sm" />
                                    <small>Exchange for real estate</small>
                                </div>
                                <div className="py-1 px-2 shadow-lg">
                                    <input type="checkbox" className="checkbox checkbox-xs mr-2 w-3 h-3 rounded-sm" />
                                    <small>Car exchange</small>
                                </div>
                            </div>
                        </details>
                        <details className="group border bg-gray-50 px-2 py-4">
                            <summary className="flex cursor-pointer items-center justify-between">
                                <h2 className="flex gap-2 font-normal text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    Search Region
                                </h2>

                                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 opacity-100 group-open:opacity-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 opacity-0 group-open:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <p className="mt-4 leading-relaxed text-left text-gray-700">
                                Not  Available
                            </p>
                        </details>
                        <details className="group border bg-gray-50 px-2 py-4">
                            <summary className="flex cursor-pointer items-center justify-between">
                                <h2 className="flex gap-2 font-normal text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
                                    </svg>

                                    Vehicle Condition
                                </h2>

                                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 opacity-100 group-open:opacity-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 opacity-0 group-open:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <p className="mt-4 leading-relaxed text-left text-gray-700">
                                No Condition Available
                            </p>
                        </details>
                        <details className="group border bg-gray-50 px-2 py-4">
                            <summary className="flex cursor-pointer items-center justify-between">
                                <h2 className="flex gap-2 font-normal text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Add. Characteristics
                                </h2>

                                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 opacity-100 group-open:opacity-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 opacity-0 group-open:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <p className="mt-4 leading-relaxed text-left text-gray-700">
                                No Characteristics Available
                            </p>
                        </details>
                        <details className="group border bg-gray-50 px-2 py-4 ">
                            <summary className="flex cursor-pointer items-center justify-between">
                                <h2 className="flex gap-2 font-normal text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                                    </svg>


                                    Color
                                </h2>

                                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 opacity-100 group-open:opacity-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 opacity-0 group-open:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <p className="mt-4 leading-relaxed text-left text-gray-700">
                                No color combination Available
                            </p>
                        </details>
                        <div className="text-start mx-3 mt-8">
                            <p className="text-gray-400">
                                Found Car: <span className="font-bold text-black">12334</span>
                            </p>
                            <div className="flex justify-between items-center mt-3 mb-12">
                                <button className="bg-red-300 text-center py-1 px-14 text-xs text-white font-semibold">
                                    Show
                                </button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 bg-red-200 p-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

                            </div>

                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Root;