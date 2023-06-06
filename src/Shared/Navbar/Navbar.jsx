import { NavLink } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../../hooks/useCart";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [, cart] = useCart();
    console.log(cart);
    const handleLogOut = () => {
        logOut()
            .then(result => { console.log(result) })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar fixed bg-opacity-30 z-30 bg-base-100 mb-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink>Home</NavLink>
                            <NavLink to={'/contract'} className="m-3 font-bold">Contract US</NavLink>
                            <NavLink to={'/ourmenu'} className="m-3 font-bold">Our Menu</NavLink>
                            <NavLink to={'/ordershop'} className="m-3 font-bold">Order Shop</NavLink>
                            {
                                user ? <button className="m-3 font-bold" onClick={handleLogOut}>LogOut</button> : <NavLink to={'/login'} className="m-3 font-bold">Login</NavLink>
                            }
                            <NavLink to={'dashboard/mycart'} className="m-3 font-bold">
                                <div className="flex">
                                    <div>
                                        <FaShoppingCart></FaShoppingCart>
                                    </div>
                                    <div>
                                        +{cart?.length || 0}
                                    </div>
                                </div></NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl h-20">Bistro Boss <br /> Restaurant</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to={'/'} className="m-3 font-bold">Home</NavLink>
                        <NavLink to={'/contract'} className="m-3 font-bold">Contract US</NavLink>
                        <NavLink to={'/ourmenu'} className="m-3 font-bold">Our Menu</NavLink>
                        <NavLink to={'/ordershop'} className="m-3 font-bold">Order Shop</NavLink>
                        {
                            user ? <button className="m-3 font-bold" onClick={handleLogOut}>LogOut</button> : <NavLink to={'/login'} className="m-3 font-bold">Login</NavLink>
                        }
                        <NavLink to={'dashboard/mycart'} className="m-3 font-bold">
                            <div className="flex">
                                <div>
                                    <FaShoppingCart></FaShoppingCart>
                                </div>
                                <div>
                                    +{cart?.length || 0}
                                </div>
                            </div></NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;