import { IoEyeOutline } from "react-icons/io5";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, supplier, test, category, details, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = coffees.filter(cof => cof._id !== _id)
                        setCoffees(remaining)
                    })
            }
        });
    }

    return (
        <div className="w-full">
            {/* card section */}
            <div className=" bg-base-100">
                <div className="flex rounded-xl shadow-xl justify-center items-center">
                    <img className="w-72 h-80 m-5 rounded-xl" src={photo} alt="coffee image here" />
                    <div className="card-body">
                        <h2 className="text-xl text-[#1B1A1AB2]"><span className="text-xl font-semibold text-[#1B1A1A] ">Name: </span>{name}</h2>
                        <p className="text-xl text-[#1B1A1AB2]"><span className="text-xl font-semibold text-[#1B1A1A]">Chef: </span>{chef}</p>
                        <p className="text-xl text-[#1B1A1AB2]"><span className="text-xl font-semibold text-[#1B1A1A]">Test: </span>{test}</p>
                    </div>
                    <div className="space-y-2 pr-4 ">
                        <button className="btn text-white text-lg bg-[#D2B48C]"><IoEyeOutline></IoEyeOutline></button>
                        <br />
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn text-white text-lg bg-[#3C393B]"><MdModeEditOutline></MdModeEditOutline></button>
                        </Link>
                        <br />
                        <button onClick={() => { handleDelete(_id) }} className="btn text-white text-lg bg-[#EA4744]"><MdDelete></MdDelete></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;