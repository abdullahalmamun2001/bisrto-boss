import logo from './../../assets/home/featured.jpg'
const Featured = () => {
    return (
        <div>
            <div className='my-10'>
                <p className="text-2xl text-center">---Should Try---</p>
                <h2 className="text-3xl text-center my-5">CHEF RECOMMENDS</h2>
            </div>
            <div className='grid grid-cols-3 gap-10 w-10/12 mx-auto'>
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={logo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">salad</h2>
                        <p className='text-xl'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-secondary">Add to Card</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={logo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">salad</h2>
                        <p className='text-xl'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-secondary">Add to Card</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={logo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">salad</h2>
                        <p className='text-xl'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-secondary">Add to Card</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;