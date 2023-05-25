// import { useEffect, useState } from "react";

// const Menu = () => {
//     const [menu, setMenu] = useState([])
//     useEffect(() => {
//         fetch('menu.json')
//             .then(res => res.json())
//             .then(data => {
//                 const filter = data.filter(d => d.category === "popular")
//                 setMenu(filter)
//             })
//     }, [])
//     return (
//       <div>
//         {
//             menu.map(singleMenu=><singleMenu 
//                 key={singleMenu._id} 
//                 singleMenu={singleMenu}>

//                 </singleMenu>)
//         }
//       </div>
//     );
// };

// export default Menu;