import './FoodSection.css'

const FoodSection = ({ heading, foodName, title }) => {
    return (
        <div>
            <div>
                <h3 className='text-center uppercase text-3xl my-9 underline'>{heading}</h3>
            </div>
            <div className='nu p-40 bg-gray-400'>
                <h2 className="text-4xl my-10 text-center">{foodName}</h2>
                <p className="text-lg">{title}</p>
            </div>
        </div>
    );
};

export default FoodSection;