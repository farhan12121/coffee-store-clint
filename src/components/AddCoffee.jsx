import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffe = e => {
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
        const newCoffee = { name, chef, supplier, test, category, details, photo, quantity }
        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Coffee Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
                console.log(data)
            })

    }
    return (

        <section className=" bg-[#F4F3F0]  px-28 py-16">
            <div className="space-y-2 col-span-full ">
                <p className="font-bold text-2xl">Add New Coffee</p>
                <p className="text-lg">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffe} className="flex flex-col space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm text-base">

                    <div className="grid text-start grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-xl font-semibold ">Name</label>
                            <input name='name' type="text" required placeholder="Enter Coffee Name " className="w-full p-2 mt-4 rounded-md" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-xl font-semibold ">Quantity</label>
                            <input name='quantity' required type="number" placeholder="Enter number of  Coffee" className="w-full p-2 mt-4 rounded-md" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-xl font-semibold ">Chef</label>
                            <input required name='chef' type="text" placeholder="Enter Coffee CHef Name" className="w-full p-2 mt-4 rounded-md" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-xl font-semibold ">Supplier</label>
                            <input required name='supplier' type="text" placeholder="Enter Coffee Supplier" className="w-full mt-4 p-2 rounded-md" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-xl font-semibold ">Taste</label>
                            <input required type="text" name='test' placeholder="Enter coffee taste" className="w-full mt-4 p-2 rounded-md" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-xl font-semibold ">Category</label>
                            <input required name='category' type="text" placeholder="Enter coffee category " className="w-full mt-4 p-2 rounded-md" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-xl font-semibold ">Details</label>
                            <input required name='details' type="text" placeholder="Enter coffee details" className="w-full mt-4 p-2 rounded-md" />
                        </div>
                        <div className="col-span-full">
                            <label className="text-xl font-semibold ">Photo</label>
                            <input required name='photo' type="photo" placeholder="Enter photo URL" className="w-full p-2 mt-4 rounded-md" />
                        </div>
                        <div className="col-span-full">
                            <input type="submit" className="btn text-xl font-semibold w-full bg-[#D2B48C]" value="Add Coffee" />
                        </div>

                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default AddCoffee;