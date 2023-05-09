import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    // destructure
    const { _id, name, quantity, supplier, taste, category, detail, photo } = coffee;
    
    // [U - Update]
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const detail = form.detail.value;
        const updatedCoffee = { _id, name, quantity, supplier, taste, category, detail, photo }
        console.log(updatedCoffee)

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // npm install sweetalert2
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="bg-blue-300 p-20">
            <Link to='/'>
                <button className="btn btn-outline btn-primary">Home</button>
            </Link>
            <h3 className="text-center text-3xl font-extrabold mb-10">Update Coffee</h3>
            <form onSubmit={handleUpdate}>
                {/* form row 1 name & quantity*/}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* form row 2  supplier & test*/}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplire Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplire Name" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* form row 3 categiory & details */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="detail" defaultValue={detail} placeholder="Details" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* form row 4 photo url */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Phoro</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block mt-10" type="submit" value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;