import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DoctorDetails = () => {
    const doctorDetails = useLoaderData()
    const { name, rate, about, address, email, phone, picture } = doctorDetails
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                {name}
                                <br className="hidden md:block" />

                                <span className="relative px-1">
                                    <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                                    <span className="relative inline-block text-deep-purple-accent-400">

                                    </span>
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                {about}
                            </p>
                        </div>
                        <div data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000" className="grid gap-5 row-gap-8 sm:grid-cols-2">
                            <div className="bg-white border-l-4 hover:transition hover:ease-in-out hover:duration-500 border-teal-400 shadow-xl hover:shadow-cyan-300/50">
                                <div className="h-full p-5 border border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        {email}
                                    </h6>
                                    <p className="text-sm text-gray-900">
                                        Rate : {rate}
                                        <br />
                                        {address}
                                    </p>
                                </div>
                            </div>
                            <div
                                data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000" className="bg-white border-l-4 hover:transition hover:ease-in-out hover:duration-500 border-teal-400 shadow-xl hover:shadow-cyan-300/50">
                                <div className="h-full p-5 border border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        {phone}
                                    </h6>
                                    <p className="text-sm text-gray-900">
                                        Rate : {rate}
                                        <br />
                                        {address}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in">
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src={picture}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;