function TourCard({ id, name, image, price, description, removeTour }) {
        return (
            <div className="border rounded-lg shadow-lg p-4 m-4 max-w-sm">
                <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="mt-4">
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p className="text-gray-600">{price}</p>
                    <p className="text-gray-700 mt-2">{description}</p>
                    <button
                        onClick={() => removeTour(id)}
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Not Interested
                    </button>
                </div>
            </div>
        );
};

export default TourCard;