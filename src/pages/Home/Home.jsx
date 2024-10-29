import Banner from "../../components/shared/Banner/Banner";
import parts from "../../assets/images/images/about_us/parts.jpg";
import person from "../../assets/images/images/about_us/person.jpg";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../components/shared/ServiceCard/ServiceCard";
import Navbar from "../../components/core/Navbar/Navbar";

const Home = () => {
    const services = useLoaderData();

    return (
        <div className="my-5">
            <Navbar></Navbar>
            <Banner></Banner>
            {/* about us */}
            <section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-28 mb-36">
                    <div className="relative">
                        <img src={person} alt="" className="w-full h-full object-cover rounded-lg" />
                        <div className="absolute top-[55%] left-[40%] w-[400px] border-t-[8px] border-white border-l-[8px] rounded-tl-lg
                        ">
                            <img src={parts} alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="space-y-6 py-8 pr-4 ps-8">
                        <h5 className="text-[#FF3811] font-bold text-xl">About Us</h5>
                        <h2 className="text-4xl font-bold max-w-xs">We are qualified & of experience in this field</h2>
                        <p className="text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p className="text-gray-500">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn bg-[#FF3811] text-white">Get More Info</button>
                    </div>
                </div>
            </section>
            {/* service area */}
            <section>
                <div  className="text-center space-y-4">
                    <h6 className="text-[#FF3811] font-bold text-xl">Service</h6>
                    <h2 className="text-4xl font-bold">Our Service Area</h2>
                    <p className="text-gray-500 max-w-lg mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
                <div className="grid grid-cols-3 gap-5 my-10">
                    {
                        services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;