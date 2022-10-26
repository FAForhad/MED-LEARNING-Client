import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div className="sm:grid md:grid grid-cols-5 gap-4">
            <div className="py-5 sticky ">
                {
                    courses.map(course => <Link to={`/courses/${course.id}`} key={course.id}>
                        <div className=" mx-5 my-10 transition duration-200 transform rounded shadow-md  hover:shadow-2xl hover:shadow-cyan-300/50">
                            <p className="text-sm font-medium py-5">
                                {course.name}
                            </p>
                        </div>
                    </Link>)
                }
            </div>
            <div className='col-span-4'>
                <section className=" dark:text-gray-100 ">
                    <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                        <div rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group  focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-800 rounded">
                            <img src="https://img.freepik.com/free-photo/doctor-man-consulting-patient-while-filling-up-application-form-desk-hospital_1150-12966.jpg?w=1380&t=st=1666670626~exp=1666671226~hmac=0bc3ebeda440a8bb162eab87ae50032ab6e71bd4f99d14e9e39f4ddc54d7dbe6" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                            <div className="p-6 space-y-2 lg:col-span-5">
                                <h3 className="text-2xl font-semibold sm:text-4xl ">MedLearning is a division of Ultimate
                                    Medical Academy</h3>
                                <span className="text-xs dark:text-gray-400">February 19, 2014</span>
                                <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                            </div>
                        </div>
                        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                courses.map(course => <Course key={course.id} course={course}></Course>)
                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Courses;