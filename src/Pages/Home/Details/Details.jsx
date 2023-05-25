import banner from './../../../assets/home/chef-service.jpg'

const Details = () => {
    return (
        <div className='text-center p-44 bg-red-600' style={{ backgroundImage: `url(${banner})` }}>
        <h1 className='text-2xl'>BISTRO ResTaurant</h1>
        <p className='w-96 mx-auto text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis amet rerum vel pariatur laboriosam nulla reprehenderit qui nisi officia explicabo architecto earum vitae recusandae, rem, hic ea quisquam nemo?</p>
      </div>
    );
};

export default Details;