import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { picture, name, duration, id } = course
    return (
        <Link to={`/courses/${id}`} aria-label="View Item">
            <div className="relative overflow-hidden transition duration-150 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={picture}
                    alt=""
                />
                <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                    <p className="text-sm font-medium tracking-wide text-white">
                        {name}
                        <br />
                        {duration}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Course;