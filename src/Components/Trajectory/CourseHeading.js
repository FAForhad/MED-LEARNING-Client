import React from 'react';

const CourseHeading = () => {
    return (
        <div>
            <section className=" dark:text-gray-100 ">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group  focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 rounded">
                        <img src="https://img.freepik.com/free-photo/doctor-man-consulting-patient-while-filling-up-application-form-desk-hospital_1150-12966.jpg?w=1380&t=st=1666670626~exp=1666671226~hmac=0bc3ebeda440a8bb162eab87ae50032ab6e71bd4f99d14e9e39f4ddc54d7dbe6" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
                            <span className="text-xs dark:text-gray-400">February 19, 2021</span>
                            <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                        </div>
                    </div>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    </div>
                </div>
            </section>
        </div >
    );
};

export default CourseHeading;