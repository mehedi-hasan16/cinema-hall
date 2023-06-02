import { Col, Container, Form } from "react-bootstrap";
import Swal from "sweetalert2";


const BookMovieForm = () => {
    const details = localStorage.getItem('movieDeatis')
    const movieDetails = JSON.parse(details)
    const { name } = movieDetails;

    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const email = form.email.value;
        const date = form.date.value;
        console.log(name, username, email, date);
        const userData = {movieName:name, username, email, date}
        localStorage.setItem('userInfo', JSON.stringify(userData));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'User details saved to local storage',
            showConfirmButton: false,
            timer: 1500
          })
          form.reset();
    }
    return (
        <Container as={Col} sm={12} md={3}>
            <h2 className="my-4 text-center">Book movie</h2>
            <Form onSubmit={handleFormSubmit} className="border p-3 rounded">
                <Form.Group className="mb-3">
                    <Form.Label>Movie Name</Form.Label>
                    <Form.Control type="text" name="moviename" placeholder="Movie Name" defaultValue={name} readOnly />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Your Email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" name="date" placeholder="Date" required />
                </Form.Group>
                <input className="btn btn-outline-primary" type="submit" value="Book" />
            </Form>
        </Container>
    );
};

export default BookMovieForm;