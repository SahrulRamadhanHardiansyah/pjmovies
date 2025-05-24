import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import carterImage from "../assets/image/trending/carter.jpeg";
import dunkirkImage from "../assets/image/trending/dunkirk.jpg";
import garfieldImage from "../assets/image/trending/garfield.jpg";
import gravityImage from "../assets/image/trending/gravity.jpg";
import pandoraImage from "../assets/image/trending/pandora.jpg";
import paranoiaImage from "../assets/image/trending/paranoia.jpg";
import axios from "axios";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white " id="trending">
          TRENDING MOVIES
        </h1>
        <br />
        <Row>
          {movies.map((result, index) => {
            return (
              <Col md={4} className="moviesWrapper" key={index}>
                <Card className="bg-dark moviesImage">
                  <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="test" className="images" />
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">{result.title}</Card.Title>
                    <Card.Text className="text-left">{result.overview}</Card.Text>
                    <Card.Text className="text-left">{result.release_date}</Card.Text>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
