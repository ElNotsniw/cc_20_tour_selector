// Creating a dropdown feature to filter the tours based on the destination

function DestinationSelector({ tours, destinations, setDestination }) {
    const uniqueDestinations = ["All", ...new Set(tours.map((tour) => tour.destination))];

// Setting the default value of the dropdown to "All" and filtering the tours based on the destination
    
    return (
        <div className="flex justify-center my-4">
            <select
                value={destinations}
                onChange={(e) => setDestination(e.target.value)}
                className="border border-gray-300 rounded p-2"
            >
                {uniqueDestinations.map((destinations) => (
                    <option key={`${destinations}`} value={destinations}>
                        {destinations}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationSelector;