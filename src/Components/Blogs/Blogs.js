import React from 'react';
import { FAQ } from './FAQ';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='Blogs'>
            <section className="">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                        <div data-aos="fade-right" data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000" className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                            <h2 className="text-4xl font-bold"> Our goal is to provide high-quality education</h2>
                            <p className="dark:text-gray-900">that is designed to deliver the highest level of outcomes .</p>
                        </div>
                        <div className="p-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className=" p-6 border-lg rounded shadow-xl group hover:shadow-2xl hover:shadow-cyan-300/50">
                                        <div className="flex items-center mt-4 space-x-4">
                                            <div>
                                                <p className="text-lg font-semibold my-2">Why we are using firebase? What is other options do we have to implement Authentication?</p>
                                            </div>
                                        </div>
                                        <p><span className='text-lg font-semibold'>Answer : </span> Firebase works under the flag of Google, and that’s why it provides powerful databases for web and mobile application development. Firebase is its secure & fast hosting services. Firebase hosting supports all content types. <br /> <br /> We can use parse, nativScript  as alternative of firebase</p>
                                    </div>
                                    <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="p-6 transition-shadow duration-200 border-lg rounded shadow-xl group hover:shadow-2xl hover:shadow-cyan-300/50">
                                        <div className="flex items-center mt-4 space-x-4">
                                            <div>
                                                <p className="text-lg font-semibold my-2">How dose private route works?</p>
                                            </div>
                                        </div>
                                        <p><span className='text-lg font-semibold'>Answer : </span>Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.
                                            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                                    </div>
                                </div>
                                <div className="grid content-center gap-4">
                                    <div data-aos="zoom-in-right" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="p-6 transition-shadow duration-200 border-lg  rounded shadow-xl group hover:shadow-2xl hover:shadow-cyan-300/50">
                                        <div className="flex items-center mt-4 space-x-4">
                                            <div>
                                                <p className="text-lg font-semibold my-2">What is Cors?</p>
                                            </div>
                                        </div>
                                        <p><span className='text-lg font-semibold'>Answer : </span> Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.</p>
                                    </div>
                                    <div data-aos="zoom-in-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="p-6 transition-shadow duration-200 border-lg rounded shadow-xl group hover:shadow-2xl hover:shadow-cyan-300/50">
                                        <div className="flex items-center mt-4 space-x-4">
                                            <div>
                                                <p className="text-lg font-semibold my-2">What is Node? How dose Node works?</p>
                                            </div>
                                        </div>
                                        <p><span className='text-lg font-semibold'>Answer : </span> Node.js is an open source, cross-platform runtime environment and library that is used for running web applications outside the client’s browser.It is used for server-side programming,It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FAQ></FAQ>
        </div >
    );
};

export default Blogs;