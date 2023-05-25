import './FoodSection.css'

const FoodSection = ({foodName,title}) => {
    return (
        <div className='nu p-40 bg-gray-400'>
            <h2 className="text-4xl my-10 text-center">{foodName}</h2>
            <p className="text-lg">{title}</p>
        </div>
    );
};

export default FoodSection;