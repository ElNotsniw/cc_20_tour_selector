function DestinationSelector({ tours, destinations, setDestination }) {
    const uniqueDestinations = ["all", ...new Set(tours.map((tour) => tour.destination))];

    return (
        <div className="flex justify-center my-4">
            <select
            value={destinations}
            onChange={(e) => setDestination(e.target.value)}
            className = "border border-gray-300 rounded p-2"
            >
                {uniqueDestinations.map((destination) => (
                    <option key={destination} value={destination}>
                        {destination.charAt(0).toUpperCase() + destination.slice(1)}
                        </option>
                ))}
            </select>
            </div>
    );
};

export default DestinationSelector;