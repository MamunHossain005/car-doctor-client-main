import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    return (
        <div className="space-y-3 border p-5 rounded-lg">
            <img src={service.img} alt="" />
            <h3 className="text-2xl font-bold">{service.title}</h3>
            <div className="flex items-center justify-between">
                <h5 className="text-[#FF3811] text-lg font-bold">Price: ${service.price}</h5>
                <Link to={`serviceDetails/${service._id}`}>
                    <button>
                        <FaArrowRightLong className="fill-[#FF3811]" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;