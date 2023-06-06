import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import useCart from "../../hooks/useCart";



const FoodCard = ({ item }) => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const [ refetch]=useCart();
    const { _id, name, price, recipe, image } = item;
    
    const handleAddCart = item => {
        console.log(item);
        // console.log(item);
        if (user && user.email) {
            const cart = { id:_id, name, price, recipe, image, email: user?.email }
            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify(cart)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    refetch();
                    if(data.insertedId){
                       
                        Swal.fire({
                            title: 'Success!',
                            text: 'This food is added on the cart ',
                            icon: 'success',
                            confirmButtonText: 'Good'
                          })
                    }
                })
        }
        else {

            Swal.fire({
                title: 'please login and then add to cart?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure></figure>
            <div className="card-body">

                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center mt-10">
                    <button onClick={() => handleAddCart(item)} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
