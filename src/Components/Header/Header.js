export const Header = () => {
    return (
        <div className="relative">
            <img
                src="https://img.freepik.com/free-photo/stethoscope-pills-decoration-with-space_23-2147691509.jpg?w=1380&t=st=1666659727~exp=1666660327~hmac=d836c775423907a54008016cf4faeacf225e15f798d3f91c5746c38077be1caa"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-opacity-50 bg-deep-purple-accent-700">
                <svg
                    className="absolute inset-x-0 bottom-0 text-white"
                    viewBox="0 0 1160 163"
                >
                    <path
                        fill="currentColor"
                        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                    />
                </svg>
                <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl text-sky-700 font-bold tracking-tight sm:text-4xl sm:leading-none">
                                MedLearning is a division of Ultimate  <br className="hidden md:block" />
                                Medical Academy
                            </h2>

                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <div className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    <img src="https://img.freepik.com/free-photo/closeup-syringe-injection-vial-flu-measles-coronavirus-covid-19-vaccine-disease-prepare-human_1157-48559.jpg?w=1380&t=st=1666659911~exp=1666660511~hmac=88219e8c29b9170e6ef1dc854bbc44dbfed017184b9ec1dcb159f0d3015d7918" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};