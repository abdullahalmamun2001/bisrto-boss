import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <progress className="progress progress-primary w-56" value="40" max="100"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRouter;