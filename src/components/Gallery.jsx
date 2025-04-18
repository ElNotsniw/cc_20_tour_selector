import TourCard from "./TourCard.jsx";

// This component displays a gallery of tours with loading and error states

function Gallery({ tours, loading, error, removeTour, refresh }) {
    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center">Error: {error.message}</div>;
    if (tours.length === 0) 
        return (
        <div className="text-center">
            <p>No tours available. Refresh to reload.</p>
            <button onClick={refresh} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Refresh
                </button>
            </div>
    );

    // Rendering the component with the list of tours

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {tours.map((tour) => (
                <TourCard key={tour.id} {...tour} removeTour={removeTour} />
            ))}
        </div>
    );
};

export default Gallery;