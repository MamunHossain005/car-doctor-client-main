import { useForm } from "react-hook-form";
import logInImage from "../../assets/images/images/login/login.svg"
import NavbarUser from "../../components/core/NavbarUser/NavbarUser";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
    const {registerUser, MySwal} = useContext(AuthContext);
    const navigate = useNavigate();

    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    });

    const { register, handleSubmit, formState, reset } = form;
    const { isSubmitSuccessful, errors } = formState;

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    const onSubmit = data => {
        const {name, email, password} = data;

        registerUser(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            MySwal.fire({
                icon: "success",
                title: "Success!!!",
                text: "User registered successfully",
                color: "green",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Ok"
            })
            .then(() => {
                navigate('/login');
            })
        })
        .catch(error => {
            MySwal.fire({
                icon: "error",
                title: "Error!!!",
                text: "User has not registered",
                color: "red",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Ok"
            });
        })
    }

    return (
        <div>
            <NavbarUser></NavbarUser>
            <div className="grid grid-cols-2 my-16 gap-5">
                <div>
                    <img src={logInImage} alt="" />
                </div>
                <div className="border rounded-lg">
                    <h2 className="text-5xl font-bold text-center mt-5 mb-10">Sign Up</h2>
                    <form className="w-11/12 md:w-3/4 mx-auto" onSubmit={handleSubmit(onSubmit)} noValidate>
                        {/* name field */}
                        <div>
                            <label htmlFor="name" className="block text-lg font-bold mb-1">Name</label>
                            <input type="text" id="name" placeholder="Your name" className="border w-full ps-4 py-1 rounded-lg" {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                }
                            })} />
                            <p className="text-red-500">{errors.name?.message}</p>
                        </div>
                        {/* Email field */}
                        <div className="mt-5">
                            <label htmlFor="email" className="block text-lg font-bold mb-1">Email</label>
                            <input type="email" id="email" placeholder="Your email address" className="border w-full ps-4 py-1 rounded-lg" {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email address is required"
                                },
                                pattern: {
                                    value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                                    message: "Invalid email address",
                                }
                            })} />
                            <p className="text-red-500">{errors.email?.message}</p>
                        </div>
                        {/* password field */}
                        <div className="mt-5">
                            <label htmlFor="password" className="block text-lg font-bold mb-1">Confirm Password</label>
                            <input type="password" id="password" placeholder="Your password" className="border w-full ps-4 py-1 rounded-lg" {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                },
                                minLength:{
                                    value: 6,
                                    message: "Password should be at least 6 characters or longer",
                                },
                                pattern: {
                                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                                    message: "Invalid password",
                                }
                            })} />
                            <p className="text-red-500">{errors.password?.message}</p>
                        </div>
                        <button type="submit" className="btn w-full mt-10 bg-[#FF3811] text-white font-bold text-lg hover:bg-white hover:outline hover:outline-2 hover:outline-[#FF3811] hover:text-[#FF3811]">Sign Up</button>
                    </form>
                    <p className="text-center mt-4">Already have an account? Please <span className="text-[#FF3811] font-bold hover:underline"><Link to={'/login'}>login</Link> </span></p>
                </div>
            </div>
        </div>

    );
};

export default SignUp;