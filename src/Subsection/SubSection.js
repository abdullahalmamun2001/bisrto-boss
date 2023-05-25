
const SubSection = ({ heading, subHeading }) => {
    return (
        <div>

            <h1 className="text-2xl text-center text-yellow-500">{heading}</h1>
            <h1 className="text-3xl text-center my-5">{subHeading}</h1>

        </div>
    );
};

export default SubSection;