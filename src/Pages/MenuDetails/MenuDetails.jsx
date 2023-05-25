import logo from './../../assets/home/featured.jpg'
import './MenuDetails.css'
const MenuDetails = () => {
    return (
        <div className='menu bg-fixed my-10'>
            <div className='my-10'>
                <p className="text-2xl text-center">--- Check it---</p>
                <h2 className="text-3xl text-center my-5">From Our Menu</h2>
            </div>
            <div className='grid grid-cols-2 px-20 py-20 text-black'>
                <div>
                    <img className='h-80 w-96 m-30 ' src={logo} alt="" />
                </div>
                <div className='items-center justify-center my-auto'>
                    <h1>March 20,2001</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eos aperiam eligendi iure assumenda, provident tempora! Corporis aliquid repudiandae quas nesciunt tempore dicta autem. Soluta ipsam eum eveniet dolorum corrupti?</p>
                    <button className='btn btn-accent my-10'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default MenuDetails;