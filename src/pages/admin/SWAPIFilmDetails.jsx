import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import MainLayout from "../layouts/MainLayout";

const SWAPIFilmDetails = () => {
  const { filmId } = useParams(); // Get film ID from URL
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilmDetails = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/films/${filmId}/`);
        if (!response.ok) throw new Error("Failed to fetch film details");
        const data = await response.json();

        // Fetch additional details for characters, planets, starships, etc.
        const fetchResources = async (urls) => {
          const responses = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
          return responses.map(item => item.name);
        };

        const [characters, planets, starships, vehicles, species] = await Promise.all([
          fetchResources(data.characters),
          fetchResources(data.planets),
          fetchResources(data.starships),
          fetchResources(data.vehicles),
          fetchResources(data.species),
        ]);

        setFilm({ ...data, characters, planets, starships, vehicles, species });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFilmDetails();
  }, [filmId]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  return (
    <MainLayout title="Film Details | MyPage" showMain={false}>
      <AdminLayout>
      <div className="container mt-4">
        <h1 className="mb-3">{film.title} (Episode {film.episode_id})</h1>
        <p><strong>Directed by:</strong> {film.director}</p>
        <p><strong>Produced by:</strong> {film.producer}</p>
        <p><strong>Release Date:</strong> {film.release_date}</p>
        
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Opening Crawl</h5>
            <p className="card-text">{film.opening_crawl}</p>
          </div>
        </div>

        <h3>Characters</h3>
        <ul className="list-group mb-3">
          {film.characters.map((name, index) => (
            <li key={index} className="list-group-item">{name}</li>
          ))}
        </ul>

        <h3>Planets</h3>
        <ul className="list-group mb-3">
          {film.planets.map((name, index) => (
            <li key={index} className="list-group-item">{name}</li>
          ))}
        </ul>

        <h3>Starships</h3>
        <ul className="list-group mb-3">
          {film.starships.map((name, index) => (
            <li key={index} className="list-group-item">{name}</li>
          ))}
        </ul>

        <h3>Vehicles</h3>
        <ul className="list-group mb-3">
          {film.vehicles.map((name, index) => (
            <li key={index} className="list-group-item">{name}</li>
          ))}
        </ul>

        <h3>Species</h3>
        <ul className="list-group mb-3">
          {film.species.map((name, index) => (
            <li key={index} className="list-group-item">{name}</li>
          ))}
        </ul>
      </div>
    </AdminLayout>
    </MainLayout>
  );
};

export default SWAPIFilmDetails;
