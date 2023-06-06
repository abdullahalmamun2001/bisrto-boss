import { Outlet, NavLink } from "react-router-dom";
import { FaCalendar, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import useCart from "../hooks/useCart";

const DashBoard = () => {
    const [, cart] = useCart();
    // TODO:server dynamic data 
    const isAdmin = true;
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {isAdmin ? <><li><NavLink to={'/dashboard/home'}><FaHome></FaHome>Admin Home</NavLink></li>
                                <li><NavLink to={'/dashboard/reservations'}><FaCalendar></FaCalendar>Add Items</NavLink></li>

                                <li><NavLink to={'/dashboard/payment'}><FaWallet></FaWallet>Manage Items</NavLink></li>
                                <li><NavLink to={'/dashboard/booking'}><FaShoppingCart></FaShoppingCart>Manage Booking</NavLink></li>
                                <li><NavLink to={'/dashboard/alluser'}><FaShoppingCart></FaShoppingCart>All Users</NavLink></li>
                                </> 
                                : 
                                <>
                        <li><NavLink to={'/dashboard/home'}><FaHome></FaHome>User Home</NavLink></li>
                                <li><NavLink to={'/dashboard/reservations'}><FaCalendar></FaCalendar>Reservations</NavLink></li>

                                <li><NavLink to={'/dashboard/payment'}><FaWallet></FaWallet>Payment History</NavLink></li>
                                <li><NavLink to={'/dashboard/mycart'}><FaShoppingCart></FaShoppingCart>My Cart<span>+{cart.length || 0}</span></NavLink></li>
                        </>}
                        <div className="divider"></div>
                        <li><NavLink to={'/'}><FaHome></FaHome>Home</NavLink></li>
                        <li><NavLink to={'/ourmenu'}>Menu</NavLink></li>
                        <li><NavLink to={'/ordershop'}>Order</NavLink></li>



                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;