import { Button, Col, Container, Row } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center ">
        <Row>
          <Col>
            <div className="title">NONTON GRATIS SEKARANG </div>
            <div className="title">DILARANG NONTON TANPA TIKET</div>
            <div className="introButton mt-4 text-center">
              <Button href="#trending" variant="dark">
                Lihat Daftar Film
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
