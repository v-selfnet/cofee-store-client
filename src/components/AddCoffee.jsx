import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const detail = form.detail.value;
        const photo = form.photo.value;
        const newCoffee = {name, quantity, supplier, taste, category, detail, photo};
        console.log(newCoffee);

        // 1 send data to server
        fetch('http://localhost:5000/coffee', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                // npm install sweetalert2
                Swal.fire({
                    title: 'Success!',
                    text: 'New Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div className="bg-blue-300 p-20">
            <h3 className="text-center text-3xl font-extrabold mb-10">Add Coffee</h3>
            <form onSubmit={handleAddCoffee}>
                {/* form row 1 name & quantity*/}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered md:w-full"/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="quantity" placeholder="Available Quantity" className="input input-bordered md:w-full" />
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
                            <input type="text" name="supplier" placeholder="Supplire Name" className="input input-bordered md:w-full"/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered md:w-full" />
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
                            <input type="text" name="category" placeholder="Category" className="input input-bordered md:w-full"/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="detail" placeholder="Details" className="input input-bordered md:w-full" />
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
                            <input type="text" name="photo" placeholder="Photo" className="input input-bordered md:w-full"/>
                        </label>
                    </div>
                </div>
                <input className="btn btn-block mt-10" type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;