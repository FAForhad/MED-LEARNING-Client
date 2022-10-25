import React from 'react';
import { useLoaderData } from 'react-router-dom';
import InstructorDetails from '../InstructorDetails/InstructorDetails';

const Instructors = () => {
    const instructors = useLoaderData()

    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                    <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                        <span className="inline-block mb-1 sm:mb-4">
                            There is no must in art
                            <br className="hidden md:block" />
                            because art is free.
                        </span>
                        <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                    </h2>
                    <p className="text-gray-700 lg:text-sm lg:max-w-md">
                        "Class is dead", says Foucault; however, according to Reicher, it is
                        not so much class that is dead, but rather the absurdity, and some
                        would say the paradigm, of class. However, the subject is interpolated
                        into a postpatriarchialist dialectic theory that includes
                        consciousness as a totality.
                    </p>
                </div>
                <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                    {
                        instructors.map(instructor => <InstructorDetails key={instructor.id} instructor={instructor}></InstructorDetails>)
                    }
                </div>
                <div className="text-center">

                </div>
            </div>
        </div>
    );
};

export default Instructors;