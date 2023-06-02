import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ item }) => {
    console.log(item.show);
    const {id, name,image, type, language, genres } = item.show;
  
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image.medium} className="w-full" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <div>Language: {language}</div>
                            <div>Type: {type}</div>
                        </Card.Text>
                        <Link to={`/details/${id}`}><Button variant="primary">See Details</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default MovieCard;