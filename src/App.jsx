import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import DestinationSelector from "./components/DestinationSelector";
import { use } from "react";

const url = "https://course-api.com/react-tours-project";

// Creating an App function to fetch data from the API and display it

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [destination, setDestination] = useState("all");
  const [error, setError] = useState(null);
  const [filteredTours, setFilteredTours] = useState([]);

  // Fetching the data from the API

  const fetchTours = async () => {
    try {
      setLoading (true);
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setFilteredTours(data);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // Filtering the tours based on the destination, removing the tours that are not in the destination, and refreshing the data

  useEffect(() => {
    if (destination === "all") {
      setFilteredTours(tours);
    } else {
      const filtered = tours.filter((tour) => tour.destination === destination);
      setFilteredTours(filtered);
      }
    }, [destination, tours]);
  
    const removeTour = (id) => {
      setTours(tours.filter((tour) => tour.id !== id));
    };

    const refresh = () => {
      fetchTours();
    };

    // Rendering the component with the filtered tours and the loading state

    return (
      <main>
        <h1 className = "text-3xl font-bold text-center my-8">Tour Gallery</h1>
        <DestinationSelector
        tours={tours}
        destinations={destinations}
        setDestination={setDestination}
        />
        <Gallery
        tours={filteredTours}
        loading={loading}
        error={error}
        removeTour={removeTour}
        refresh={refresh}
        />
      </main>
    );
  };

  export default App;