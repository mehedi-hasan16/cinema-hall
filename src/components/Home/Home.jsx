import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Container, Row } from "react-bootstrap";

const Home = () => {
    const loadedData = useLoaderData();
    console.log(loadedData);
    return (
        <div className="my-5">
            <Container>
            <h2 className="my-4 text-center">All Movies</h2>
                <Row xs={1} md={3} className="g-4">
                    {
                        loadedData.map((item, idx) => <MovieCard key={idx} item={item}></MovieCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;