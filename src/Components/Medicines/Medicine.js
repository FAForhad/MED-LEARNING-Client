import React from 'react';

const Medicine = ({ medicine }) => {
    const { name, picture, about, company } = medicine
    return (
        <div>
            <a
                title={company}
                href="/"
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
                <div className="flex flex-col h-full border">
                    <img
                        src={picture}
                        className="object-cover w-full h-48"
                        alt=""
                    />
                    <div className="flex-grow border border-t-0 rounded-b">
                        <div className="p-5">
                            <h6 className="mb-2 font-semibold leading-5">
                                {name}
                            </h6>
                            <h6 className="mb-2 font-semibold leading-5">
                                {company}
                            </h6>
                            <p className="text-sm text-gray-900">
                                {about.length >= 150 ? about.slice(0, 150) : about}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Medicine;