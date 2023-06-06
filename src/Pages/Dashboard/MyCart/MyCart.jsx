import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";


const MyCart = () => {
    const [refetch, cart] = useCart();

    const handleDelete = (item) => {
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
                fetch(`http://localhost:5000/cart/${item._id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.acknowledged) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    
    console.log(cart);
    const total = cart.reduce((sum, items) => items.price + sum, 0)
    return (
        <div>
            <h1>this cart length{cart.length}</h1>
            <h1>this cart total{total}</h1>
            <div>

                {
                    cart.map(c => <div key={c._id}><span>{c._id}</span>
                        <button onClick={() => handleDelete(c)} className="btn btn-primary mt-10">delete</button></div>)
                }

            </div>

        </div>
    );
};

export default MyCart;