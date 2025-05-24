import { Card, Container, Row, Col, Image } from "react-bootstrap";
import abigailImage from "../assets/image/horror/abigail.jpg";
import aquietplaceImage from "../assets/image/horror/aquietplace.png";
import immaculateImage from "../assets/image/horror/immaculate.jpg";
import siksanerakaImage from "../assets/image/horror/siksaneraka.jpg";
import tarotImage from "../assets/image/horror/tarot.jpg";
import thewitchImage from "../assets/image/horror/thewitch.jpg";

const Horror = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white " id="horror">HORROR MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="moviesWrapper" >
            <Card className="bg-dark moviesImage">
              <Image src={abigailImage} alt="Abigail" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Abigail</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="moviesWrapper">
            <Card className="bg-dark moviesImage">
              <Image src={aquietplaceImage} alt="AQuitePlace" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">A Quite Place</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="moviesWrapper">
            <Card className="bg-dark moviesImage">
              <Image src={immaculateImage} alt="Immaculate" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">immaculate</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="moviesWrapper">
            <Card className="bg-dark moviesImage">
              <Image src={siksanerakaImage} alt="SiksaNeraka" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Siksa Neraka</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="moviesWrapper">
            <Card className="bg-dark moviesImage">
              <Image src={tarotImage} alt="Tarot" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Tarot</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="moviesWrapper">
            <Card className="bg-dark moviesImage">
              <Image src={thewitchImage} alt="TheWitch" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">The Witch</Card.Title>
                <Card.Text className="text-left">This is a wider card with supporting text below</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Horror;
