import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaDiscourse } from "react-icons/fa";
import { GiMedicines, } from "react-icons/gi";
import { GrBlog } from "react-icons/gr";

export const Details = () => {
    return (
        <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-transparent">
            <div data-aos="fade-up" data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
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
                                    id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Knock</span>
                    </span>{' '}
                    us out today to get medical services

                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Develops, produces, and markets drugs or pharmaceutical drugs for use as medications to be administered to patients
                </p>
            </div>
            <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div data-aos="zoom-in-right" data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" className="flex flex-col justify-between p-5 border rounded shadow-sm hover:drop-shadow-2xl hover:shadow-xl hover:transition hover:ease-in-out hover:duration-300 hover:shadow-cyan-200/50">
                    <Link to='/courses'>
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <FaDiscourse></FaDiscourse>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">\\\Courses///</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            A flower in my garden, a mystery in my panties. Heart attack never
                            stopped old Big Bear.
                        </p>
                    </Link>
                </div>
                <div data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" className="flex flex-col justify-between p-5 border rounded shadow-sm hover:drop-shadow-2xl hover:shadow-xl hover:transition hover:ease-in-out hover:duration-300 hover:shadow-cyan-200/50">
                    <Link to='/instructors'>
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <FaChalkboardTeacher ></FaChalkboardTeacher>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">\\\Instructor///</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            Rough pomfret lemon shark plownose chimaera southern sandfish
                            kokanee northern sea.
                        </p>
                    </Link>
                </div>
                <div data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" className="flex flex-col justify-between p-5 border rounded shadow-sm hover:drop-shadow-2xl hover:shadow-xl hover:transition hover:ease-in-out hover:duration-300 hover:shadow-cyan-200/50">
                    <Link to='medicines'>
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <GiMedicines></GiMedicines>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">\\\Medicines///</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            A slice of heaven. O for awesome, this chocka full cuzzie is as
                            rip-off as a cracker.
                        </p>
                    </Link>
                </div>
                <div data-aos="zoom-in-left" data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" className="flex flex-col justify-between p-5 border rounded shadow-sm hover:drop-shadow-2xl hover:shadow-xl hover:transition hover:ease-in-out hover:duration-300 hover:shadow-cyan-200/50">
                    <Link to='/blogs'>
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <GrBlog></GrBlog>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">\\\Blogs///</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            Disrupt inspire and think tank, social entrepreneur but
                            preliminary thinking think tank compelling.
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};