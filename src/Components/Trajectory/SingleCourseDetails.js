import React from 'react';

const SingleCourseDetails = ({ details }) => {
    const { name, course } = details
    console.log(details)
    return (
        <div>
            <div data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                data-aos-duration="500" className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl hover:shadow-cyan-300/50">
                <div className="p-5">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-8 h-8 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <p className="mb-2 font-bold">{name}</p>
                    <p className="text-sm leading-5 text-gray-900">
                        {
                            course.slice(0, 300)
                        }
                    </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
        </div>
    );
};

export default SingleCourseDetails;