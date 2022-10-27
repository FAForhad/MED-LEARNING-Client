export const Loaction = () => {
    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div data-aos="fade-left" data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                    className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <iframe className="w-full h-full" id="gmap_canvas" src="https://maps.google.com/maps?q=chittagong%20port&t=k&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>
            </div>
            <div data-aos="fade-right" data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        Headquarters Regions :
                        <br className="hidden md:block" />
                        <br />
                        Greater South Halishahar Area,
                        <span className="inline-block text-deep-purple-accent-400">
                            Chittagong , Port
                        </span>
                    </h2>
                    <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                        Where is MedLearning's headquarters? MedLearning is located in Greater South Halishahar Area, Chittagong , Port..
                    </p>
                    <div className="flex items-center">
                    </div>
                </div>
            </div>
        </div>
    );
};