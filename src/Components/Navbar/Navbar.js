import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { GiMiracleMedecine } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContexts';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [toggle, setToggle] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    console.log(toggle)

    const handleSignOut = () => {
        logOut()
            .then(() => toast.success('Log Out Successfully'))
            .catch((error) => console.log(error));
    }
    return (
        <div className={`${toggle ? 'bg-slate-700' : 'bg-transparent'} sticky top-0 z-50`}>
            <div className="px-4 py-4 mx-auto lg:py-8  sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8 ">
                <div className="relative flex idtems-center justify-between lg:justify-center lg:space-x-16">
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link
                                to="/courses"
                                aria-label="Courses"
                                title="Courses"
                                className="font-medium tracking-wide text-black hover:text-teal-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Trajectory
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/instructors"
                                aria-label="Instructor"
                                title="Instructor"
                                className="font-medium tracking-wide text-black hover:text-teal-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Instructors
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/medicines"
                                aria-label="medicines"
                                title="medicines"
                                className="font-medium tracking-wide text-black hover:text-teal-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Medicines
                            </Link>
                        </li>
                    </ul>
                    <Link
                        to="/"
                        aria-label="MED LearninG"
                        title="MED LearninG"
                        className="inline-flex items-center"
                    >
                        <GiMiracleMedecine size='40px' className='text-teal-500'></GiMiracleMedecine>
                        <span className={`  ml-2 text-xl font-bold tracking-wide  uppercase`}>
                            MED LEARNING
                        </span>
                    </Link>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link
                                to="/blogs"
                                aria-label="Blogs"
                                title="Blogs"
                                className="font-medium tracking-wide text-black hover:text-teal-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Blogs
                            </Link>
                        </li>
                        {
                            !user?.uid

                                ?
                                <>
                                    <li>
                                        <Link
                                            to="/signIn"
                                            aria-label="Sign in"
                                            title="Sign in"
                                            className="font-medium tracking-wide text-black hover:text-teal-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                            Sign in
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/signUp"
                                            aria-label="Sign up"
                                            title="Sign up"
                                            className="font-medium tracking-wide text-black hover:text-teal-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                            Sign up
                                        </Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <button
                                            onClick={handleSignOut}
                                            aria-label="Sign Out"
                                            title="Sign Out"
                                            className="font-medium tracking-wide text-black hover:text-teal-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                            Sign Out
                                        </button>
                                    </li>
                                    <li>
                                        <img src={user?.photoURL} alt="" title={user?.displayName} className="self-center flex-shrink-0 w-12 h-12 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                                    </li>
                                </>
                        }
                        <label type="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                            <span className='text-black'>Light</span>
                            <span className="relative">
                                <input onClick={() => setToggle(!toggle)} id="Toggle1" type="checkbox" className="hidden peer" />
                                <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-100 peer-checked:dark:bg-gray-900"></div>
                                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-blue-800"></div>
                            </span>
                            <span className='text-black'>Dark</span>
                        </label>
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to="/"
                                                aria-label="MED LearninG"
                                                title="MED LearninG"
                                                className="inline-flex items-center"
                                            >
                                                <svg
                                                    className="w-8 text-deep-purple-accent-400"
                                                    viewBox="0 0 24 24"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeMiterlimit="10"
                                                    stroke="currentColor"
                                                    fill="none"
                                                >
                                                    <rect x="3" y="1" width="7" height="12" />
                                                    <rect x="3" y="17" width="7" height="6" />
                                                    <rect x="14" y="1" width="7" height="6" />
                                                    <rect x="14" y="11" width="7" height="12" />
                                                </svg>
                                                <span className="ml-2 text-xl font-bold tracking-wide text-blue-200 uppercase">
                                                    MED LearninG
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <Link
                                                    to="/courses"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    className="font-medium tracking-wide text-black hover:text-teal-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Trajectory
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/instructors"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    className="font-medium tracking-wide text-black hover:text-teal-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Instructors
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/medicines"
                                                    aria-label="Medicines"
                                                    title="Medicines"
                                                    className="font-medium tracking-wide text-black hover:text-teal-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Medicines
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="blogs"
                                                    aria-label=" Blogs"
                                                    title=" Blogs"
                                                    className="font-medium tracking-wide text-black hover:text-teal-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Blogs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/signIn"
                                                    aria-label="Sign in"
                                                    title="Sign in"
                                                    className="font-medium tracking-wide text-black hover:text-teal-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Sign in
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/signUp"
                                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                    aria-label="Sign up"
                                                    title="Sign up"
                                                >
                                                    Sign up
                                                </Link>
                                            </li>
                                            <label type="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                                                <span className='text-black'>Light</span>
                                                <span className="relative">
                                                    <input onClick={() => setToggle(!toggle)} id="Toggle1" type="checkbox" className="hidden peer" />
                                                    <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-100 peer-checked:dark:bg-gray-900"></div>
                                                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-blue-800"></div>
                                                </span>
                                                <span className='text-black'>Dark</span>
                                            </label>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;