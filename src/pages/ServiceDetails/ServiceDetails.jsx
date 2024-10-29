import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../components/core/Navbar/Navbar";
import Footer from "../../components/core/Footer/Footer";

const ServiceDetails = () => {
    const service = useLoaderData();
    const { img, title, description, facility, price, _id } = service;
    console.log(_id);
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[url('/checkout.png')] w-full h-[200px] md:h-[250px] bg-cover rounded-lg relative">
                <div className="w-full h-full bg-gradient-to-r from-gray-900 rounded-lg"></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[5%]">
                    <h2 className="text-white text-4xl font-bold">Service Details</h2>
                </div>
                <div className="h-0 w-[300px] absolute bottom-0 left-1/2 -translate-x-1/2 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[50px] border-b-[#FF3811]">
                    <p className="text-white text-lg font-medium text-center mt-[10px]">Home/Service Details</p>
                </div>
            </div>
            <div className="grid grid-cols-4 my-10 gap-8">
                <div className="col-span-3">
                    <img src={img} alt="" />
                    <h2 className="text-3xl font-medium mb-4">{title}</h2>
                    <p className="text-gray-700">{description}</p>
                    <div className="grid grid-cols-2 gap-5 mt-8">
                        {facility.map((fac, idx) => <div key={idx} className="border-t-2 border-t-[#FF3811] rounded-lg p-4 bg-slate-200">
                            <h3 className="text-lg font-bold mb-4">{fac.name}</h3>
                            <p>{fac.details}</p>
                        </div>)}
                    </div>
                </div>
                <div>
                    <h2 className="mt-12 text-3xl font-bold mb-3">Price ${price}</h2>
                    <Link to={`/checkout/${service._id}`}>
                        <button className="w-full bg-[#FF3811] text-white font-bold py-2 rounded-md hover:bg-white hover:text-[#FF3811] hover:outline hover:outline-2 hover:outline-[#FF3811]">Proceed Checkout</button>
                    </Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;