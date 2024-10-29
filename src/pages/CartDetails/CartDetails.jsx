import { useContext, useEffect, useState } from "react";
import Footer from "../../components/core/Footer/Footer";
import NavbarUser from "../../components/core/NavbarUser/NavbarUser";
import { AuthContext } from "../../provider/AuthProvider";
import { RxCross2 } from "react-icons/rx";

const CartDetails = () => {
    const { user, MySwal } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    const url = `http://localhost:5000/orders?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleDelete = id => {
        MySwal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/orders/${id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        const ordersCopy = [...orders];
                        const newOrders = ordersCopy.filter(order => order._id !== id);
                        setOrders(newOrders);
                        MySwal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })
            }
          });
        
    }

    const handleConfirm = id => {
        MySwal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/orders/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({status: 'Confirmed'}),
                })
                .then(res => res.json())
                .then(data => {
                    if(data.modifiedCount > 0){
                        const ordersCopy = [...orders];
                        const remainingOrders = ordersCopy.filter(order => order._id !== id);
                        const updated = ordersCopy.find(order => order._id === id);
                        updated.status = 'Confirmed';
                        const newOrders = [updated, ...remainingOrders];
                        setOrders(newOrders);
                        MySwal.fire({
                            title: "Updated!",
                            text: "Your file has been updated.",
                            icon: "success"
                          });
                    }
                })
            }
          });
    }

    return (
        <div>
            <NavbarUser></NavbarUser>
            <div className="bg-[url('/checkout.png')] w-full h-[200px] md:h-[250px] bg-cover rounded-lg relative">
                <div className="w-full h-full bg-gradient-to-r from-gray-900 rounded-lg"></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[5%]">
                    <h2 className="text-white text-4xl font-bold">Cart Details</h2>
                    <p className="text-[#FF3811] mt-1">Home-Product Details</p>
                </div>
            </div>
            <div className="my-12">
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            {orders.map((order, idx) => <tr key={order._id}>
                                <td>
                                    <button className="bg-gray-600 w-10 h-10 flex justify-center items-center rounded-full" onClick={() => handleDelete(order._id)}><RxCross2 className="text-white text-xl"/></button>
                                </td>
                                <th>{idx + 1}</th>
                                <td>{order.serviceType}</td>
                                <td>{order.date}</td>
                                <td>${order.price}</td>
                                <td>
                                    {
                                        order?.status ? <p className="font-bold text-blue-600">{order?.status}</p> : <button className="font-bold" onClick={() => handleConfirm(order._id)}>Please Confirm</button>
                                    }
                                    
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CartDetails;