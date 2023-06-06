import { useQuery } from "@tanstack/react-query";


const AddUSer = () => {
    const { data: user = [], refetch } = useQuery(['user'], async () => {
        const res = await fetch('http://localhost:5000/user')
        return res.json()

    
    })
    const handleMakeAdmin=(ko)=>{
        console.log( "clicked");
        fetch(`http://localhost:5000/user/admin/${ko._id}`,{method:"PATCH"})
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            refetch();
            
        })
    }
    return (
        <div>
            <h1>{user.map(i=><div key={i._id}>
                <p>{i._id}</p>
                {
                    i.role==="admin"? "Admin":<button className="btn btn-primary" onClick={()=>handleMakeAdmin(i)}>user</button>
                }
                </div>)}</h1>
        </div>
    );
};

export default AddUSer;