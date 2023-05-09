import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, photo } = coffee;

    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // [D - Delete] from MongoDB
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                              )
                              const remain = coffees.filter(cof => cof._id !== id)
                              setCoffees(remain)
                        }
                    })
            }
        })
    }

    return (
        <div className="card card-side bg-orange-300 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Coffee" /></figure>
            <div className="flex w-full justify-between p-10">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Taste: {taste}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Category: {category}</p>
                </div>
                <div className="btn-group btn-group-vertical gap-4">
                    <button className="btn">View</button>
                    <Link to={`/updatecoffee/${_id}`}>
                        <button className="btn">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-danger">x</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;