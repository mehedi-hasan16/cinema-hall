import { Button, Container  } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const MovieDetails = () => {
    const showDetails = useLoaderData();
    console.log(showDetails);
    const { image, name, summary, language, genres} = showDetails;
    const handleBookMovie=()=>{
        const movieName = {name};
        localStorage.setItem('movieDeatis', JSON.stringify(movieName));
    }
    return (
        <div className="my-5">
            <Container>
            <h2 className="my-4 text-center">Movie Details</h2>

                <div className="card mb-3" style={{ maxWidth: '100%' }}>
                    <div className="row g-0">
                        <div className="col-md-2">
                            <img src={image.medium} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-10">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{summary}</p>
                                <div className="card-text">Language: {language}</div>
                                <div className="card-text mb-2">Genres: {genres.map((n, idx) => <span key={idx}>{n} </span>)}</div>
                                <Link to={`/bookMovie`}><Button onClick={handleBookMovie} variant="primary">Book movie</Button></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default MovieDetails;