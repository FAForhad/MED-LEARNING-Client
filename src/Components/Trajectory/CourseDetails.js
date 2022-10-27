import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToPdf from '../../Others/ToPDF/ToPdf';
import SingleCourseDetails from './SingleCourseDetails';

const CourseDetails = () => {
    const courseDetails = useLoaderData()
    const { courses, picture } = courseDetails
    return (
        <div>
            <ToPdf rootElementsId="pageDownload" downloadFileName='testPage' />
            <div className="bg-gray-100" id='pageDownload'>
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group  focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-800 rounded">
                        <img src={picture} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-12 dark:bg-gray-500" />
                    </div>
                </div>
                <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                        <svg
                            viewBox="0 0 88 88"
                            className="w-full max-w-screen-xl text-indigo-100"
                        >
                            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                            <circle
                                fillOpacity="0.2"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="44"
                            />
                            <circle
                                fillOpacity="0.2"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="37.5"
                            />
                            <circle
                                fillOpacity="0.3"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="29.5"
                            />
                            <circle
                                fillOpacity="0.3"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="22.5"
                            />
                        </svg>
                    </div>
                    <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {

                            courses.map(details => <SingleCourseDetails key={details.name} details={details}></SingleCourseDetails>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;