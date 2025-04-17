import React, { useState, useEffect } from 'react';

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = 'https://course-api.com/react-tours-project';

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTours(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setTours([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          const { id, image, info, price, name } = tour;
          return (
            <article key={id} className="tour">
              <img src={image} alt={name} />
              <div className="tour-info">
                <h3>{name}</h3>
                <p>{info}</p>
                <span>${price}</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
    );
  };

  export default Tours;