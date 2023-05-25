// import banner from './../../../assets/home/banner.jpg'
import slide from './../../../assets/home/slide2.jpg'
import './Banner2.css'
const Banner2 = () => {
    return (
        <div className="menu grid grid-cols-2 ">
            <div>
            <img className='m-32' src={slide} alt="" />
            </div>
            <div>
                <h1>my name is mamun</h1>
            </div>
        </div>
    );
};

export default Banner2;