import { useForm } from "react-hook-form";
import Footer from "../../components/core/Footer/Footer";
import Navbar from "../../components/core/Navbar/Navbar";
import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import moment from 'moment';

const Checkout = () => {
    const service = useLoaderData();
    const { MySwal } = useContext(AuthContext);

    const form = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            message: ""
        }
    });

    const { register, handleSubmit, formState, reset } = form;
    const { isSubmitSuccessful, errors } = formState;

    const onSubmit = data => {
        const { firstName, lastName, phone, email, message } = data;
        const date = moment().format('l');
        const order = { firstName, lastName, phone, email, message, serviceType: service.title, date, price: service.price };

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    MySwal.fire({
                        icon: "success",
                        title: "Success!!!",
                        text: "Order added successfully",
                        color: "green",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Ok"
                    })
                }
                else {
                    MySwal.fire({
                        icon: "error",
                        title: "Error!!!",
                        text: "Order doesn't added",
                        color: "red",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Ok"
                    });
                }
            })
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    return (
        <div>
            <Navbar></Navbar>
            <div className="my-12">
                <div className="bg-[url('/checkout.png')] w-full h-[200px] md:h-[250px] bg-cover rounded-lg relative">
                    <div className="w-full h-full bg-gradient-to-r from-gray-900 rounded-lg"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-[5%]">
                        <h2 className="text-white text-4xl font-bold">Check Out</h2>
                    </div>
                    <div className="h-0 w-[300px] absolute bottom-0 left-1/2 -translate-x-1/2 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[50px] border-b-[#FF3811]">
                        <p className="text-white text-lg font-medium text-center mt-[10px]">Home/Checkout</p>
                    </div>
                </div>
                <div className="bg-gray-200 my-12 p-10">
                    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-3/4 mx-auto">
                        <div className="grid grid-cols-2 gap-5 mb-4">
                            <div>
                                <input type="text" id="firstName" placeholder="First Name" className="w-full ps-3 py-2 rounded-lg" {...register("firstName", {
                                    required: {
                                        value: true,
                                        message: "First name is required"
                                    }
                                })} />
                                <p className="text-red-500">{errors.firstName?.message}</p>
                            </div>
                            <div>
                                <input type="text" id="lastName" placeholder="Last Name" className="w-full ps-3 py-2 rounded-lg" {...register("lastName", {
                                    required: {
                                        value: true,
                                        message: "Last name is required"
                                    }
                                })} />
                                <p className="text-red-500">{errors.lastName?.message}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <input type="tel" id="phone" placeholder="Your Phone" className="w-full ps-3 py-2 rounded-lg" {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "Phone number is required"
                                    },
                                    pattern: {
                                        value: /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm,
                                        message: "Invalid phone number"
                                    }
                                })} />
                                <p className="text-red-500">{errors.phone?.message}</p>
                            </div>
                            <div>
                                <input type="email" id="email" placeholder="Your Email" className="w-full ps-3 py-2 rounded-lg" {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email address is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                                        message: "Invalid email address"
                                    }
                                })} />
                                <p className="text-red-500">{errors.email?.message}</p>
                            </div>
                        </div>
                        <textarea id="message" placeholder="Your message" className="p-3 h-[200px] w-full mt-4 rounded-lg" {...register("message", {
                            required: {
                                value: true,
                                message: "Message is required"
                            }
                        })}></textarea>
                        <p className="text-red-500">{errors.message?.message}</p>
                        <button type="submit" className="w-full bg-[#FF3811] text-white font-bold py-3 rounded-md hover:bg-white hover:text-[#FF3811] hover:outline hover:outline-2 hover:outline-[#FF3811] mt-8">Order Confirm</button>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Checkout;