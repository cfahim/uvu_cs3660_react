import { useEffect, useState } from "react";
import SWAPIimageConfig from "../../configs/SWAPIImageConfig";


const SWAPIFilms = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortBy, setSortBy] = useState("episode"); // "episode" or "release"

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const response = await fetch("https://swapi.dev/api/films/");
                if (!response.ok) throw new Error("Failed to fetch films");
                const data = await response.json();
                setFilms(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFilms();
    }, []);

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

    // Sorting logic
    const sortedFilms = [...films].sort((a, b) => {
        if (sortBy === "release") {
            return new Date(a.release_date) - new Date(b.release_date);
        } else {
            return a.episode_id - b.episode_id;
        }
    });

    return (
        <div className="container">
            <div className="row">
                <h2 className="mb-4">📽️ Star Wars Films</h2>
            </div>

            {/* Sort Toggle Button */}
            <button
                className="btn btn-secondary mb-3"
                onClick={() => setSortBy(sortBy === "episode" ? "release" : "episode")}
            >
                Sort by: {sortBy === "episode" ? "Release Date" : "Episode Number"}
            </button>

            <div className="row">
                {sortedFilms.map((film) => (
                    <div key={film.episode_id} className="col-md-4 mb-3">
                        <img src={SWAPIimageConfig.thumbnails[film.episode_id]} alt={film.title} className="card-img-top img-fluid"
                            style={{ width: "100%", height: "600px", objectFit: "cover" }}
                        />
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title">Episode {film.episode_id}: {film.title}</h5>
                                <p className="card-text text-muted">Released: {film.release_date}</p>
                                <a href="#" class="btn btn-primary">{film.title}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SWAPIFilms;
