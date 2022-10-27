import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const InstructorDetails = ({ instructor }) => {
    const { name, picture, email, address, id } = instructor
    return (
        <Link data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-duration="2000" to={`/instructors/${id}`} aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={picture}
                    alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-4 text-xl font-bold text-teal-500">
                        {name}
                    </p>
                    <p className="text-sm tracking-wide text-gray-300">
                        Email :   {email}
                    </p>
                    <br />
                    <h1 className='text-lg text-gray-100'>  {address}</h1>
                    <div className='flex items-center text-lg text-teal-500 p-5'>
                        <p>About doctor <FaArrowRight></FaArrowRight></p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default InstructorDetails;