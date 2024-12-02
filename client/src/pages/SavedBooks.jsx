import {
  Container,
  Card,
  Button,
  Row,
  Col,
} from 'react-bootstrap';

import { ME } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';
import { DELETE_BOOK } from '../utils/mutations';

const SavedBooks = () => {
  const { loading, data } = useQuery(ME);
  const [removeBook] = useMutation(DELETE_BOOK);

  const userData = data?.me || {};
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  // Function to handle deleting a book
  const handleDeleteBook = async (_id) => {
    console.log('attempting to delete book with id: ', _id)
    if (!token) {
      return false;
    }

    try {
      await removeBook({
        variables: { _id },
      });
      removeBookId(_id);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </div>
      <Container>
        <h2 className="pt-5">
          {userData.savedBooks?.length
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <Row>
          {userData.savedBooks?.map((book) => (
            <Col md="4" key={book._id}>
              <Card border="dark">
                {book.image && (
                  <Card.Img
                    src={book.image}
                    alt={`The cover for ${book.title}`}
                    variant="top"
                  />
                )}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className="small">Authors: {book.authors?.join(', ')}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleDeleteBook(book._id)}
                  >
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default SavedBooks;