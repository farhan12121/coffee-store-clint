import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { _id, name, chef, supplier, test, category, details, photo, quantity } = coffee;


    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, chef, supplier, test, category, details, photo, quantity }


        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount
                    > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Coffee updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                console.log(data)
            })

    }

    return (
        <section className=" bg-[#F4F3F0]  px-28 py-16">
            <div className="space-y-2 col-span-full ">
                <p className="font-bold text-2xl">Update Coffee</p>
            </div>
            <form onSubmit={handleUpdateCoffee} className="flex flex-col space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm text-base">

                    <div className="grid text-start grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-xl font-semibold ">Name</label>
                            <input name='name' defaultValue={name} type="text" required placeholder="Enter Coffee Name " className="w-full p-2 mt-4 rounded-md" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-xl font-semibold ">Quantity</label>
                            <input defaultValue={quantity} name='quantity' required type="number" placeholder="Enter number of  Coffee" className="w-full p-2 mt-4 rounded-md" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-xl font-semibold ">Chef</label>
                            <input defaultValue={chef} required name='chef' type="text" placeholder="Enter Coffee CHef Name" className="w-full p-2 mt-4 rounded-md" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-xl font-semibold ">Supplier</label>
                            <input required defaultValue={supplier} name='supplier' type="text" placeholder="Enter Coffee Supplier" className="w-full mt-4 p-2 rounded-md" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-xl font-semibold ">Taste</label>
                            <input defaultValue={test} required type="text" name='test' placeholder="Enter coffee taste" className="w-full mt-4 p-2 rounded-md" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-xl font-semibold ">Category</label>
                            <input defaultValue={category} required name='category' type="text" placeholder="Enter coffee category " className="w-full mt-4 p-2 rounded-md" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-xl font-semibold ">Details</label>
                            <input defaultValue={details} required name='details' type="text" placeholder="Enter coffee details" className="w-full mt-4 p-2 rounded-md" />
                        </div>
                        <div className="col-span-full">
                            <label className="text-xl font-semibold ">Photo</label>
                            <input defaultValue={photo} required name='photo' type="photo" placeholder="Enter photo URL" className="w-full p-2 mt-4 rounded-md" />
                        </div>
                        <div className="col-span-full">
                            <input type="submit" className="btn text-xl font-semibold w-full bg-[#D2B48C]" value="Update Coffee" />
                        </div>

                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default UpdateCoffee;