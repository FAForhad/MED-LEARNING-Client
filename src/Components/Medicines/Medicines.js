
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Medicine from './Medicine';
import './Medicines.css'

const Medicines = () => {

    const medicines = useLoaderData();
    console.log(medicines)

    return (
        <div className='back'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">The</span>
                        </span>{' '}
                        The pharmaceutical industry discovers
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Develops, produces, and markets drugs or pharmaceutical drugs for use as medications to be administered to patients
                    </p>
                </div>
                <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                    {
                        medicines.map(medicine => <Medicine key={medicine.id} medicine={medicine}></Medicine>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Medicines;