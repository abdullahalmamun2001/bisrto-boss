export const saveUSer=(user)=>{

   
    const newUserInfo={email:user?.email}
                fetch(`http://localhost:5000/user/${user?.email}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUserInfo)

                })
                    .then(res => res.json())
                    .then(data => console.log(data))

    
}