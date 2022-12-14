import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContexts';

const SignUp = () => {
    const { register, updateUser, verifyEmail } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const picture = form.picture.value
        const email = form.email.value
        const password = form.password.value
        if (!/(?=.*[A-Z])/.test(password)) {
            return toast.error('Password should contain at least a capital lette')
        }
        if (!/(?=.*[!@#\$%\^&\*])/.test(password)) {
            return toast.error('Should contain at least a special character')
        }
        if (password.length < 8) {
            return toast.error(' Password should be 8 letter or more')
        }
        register(email, password)
            .then(result => {
                const user = result.user
                form.reset()
                handleupdateUser(name, picture)
                verifyEmail()
                    .then(() => {
                        toast.success('Email verification sent!', {
                            style: {
                                border: '1px solid #713200',
                                padding: '16px',
                                color: '#713200',
                            },
                            iconTheme: {
                                primary: '#713200',
                                secondary: '#FFFAEE',
                            },
                        });
                    })
                toast.success('Sign Up Successful')
                console.log(user)
                navigate('/')
            })
            .catch(error => console.error(error))
    }

    const handleupdateUser = (name, picture) => {
        const profile = {
            displayName: name,
            photoURL: picture
        }
        updateUser(profile)
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (

        <div className="relative">
            <img
                src="https://img.freepik.com/free-vector/magnetic-resonance-imaging-tomography-mri_1150-50293.jpg?w=1380&t=st=1666760792~exp=1666761392~hmac=cbd45f18e2175e7cf56cd370d9c9591f0686684ed7b9ea74f6a1463d3644890e"
                className="absolute inset-0 object-cover w-50 h-full"
                alt=""
            />
            <div className="relative  bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                        </div>
                        <div data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="1000" className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-800 dark:text-gray-100">
                            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                            <form onSubmit={handleSignIn} className="space-y-6 ng-untouched ng-pristine ng-valid">
                                <div className="space-y-1 text-sm">
                                    <label type="name" className="block dark:text-gray-400">Name</label>
                                    <input type="name" name="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" required />
                                </div>
                                <div className=" text-sm">
                                    <label type="picture" className="block dark:text-gray-400">Picture URL</label>
                                    <input type="picture" name="picture" placeholder="Your Picture URL" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" required />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label type="email" className="block dark:text-gray-400">Email</label>
                                    <input type="email" name="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" required />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label type="password" className="block dark:text-gray-400">Password</label>
                                    <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" required />
                                </div>
                                <button type="submit" className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400 hover:bg-violet-800 hover:text-gray-200">Sign in</button>
                            </form>
                            <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                                <Link to='/signIn' rel="noopener noreferrer" className="underline dark:text-gray-100"> Sign In</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;