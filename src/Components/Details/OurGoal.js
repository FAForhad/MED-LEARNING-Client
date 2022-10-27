import { Link } from "react-router-dom";

export const OurGoal = () => {
    return (
        <div data-aos="zoom-in" data-aos-easing="ease-out-cubic"
            data-aos-duration="1000" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="p-8 rounded shadow-xl sm:p-16">
                <div className="flex flex-col lg:flex-row">
                    <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                        <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            MedLearning is a division
                            <br className="hidden md:block" />
                            of Ultimate <br />
                            <span className="inline-block text-deep-purple-accent-400">
                                Medical Academy
                            </span>
                        </h2>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="mb-4 text-base text-gray-700">
                            Our goal is to provide high-quality education that is designed todeliver the highest level of outcomes for not only the practitioner but also the patient.
                        </p>
                        <Link
                            to='/blogs'
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Blogs
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};