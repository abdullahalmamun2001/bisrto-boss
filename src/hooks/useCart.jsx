import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useCart = () => {
    const { user } = useContext(AuthContext)
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            // console.log(user?.email);
            const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`)
            return res.json()
        }
    })
    return [refetch, cart]
}

export default useCart;