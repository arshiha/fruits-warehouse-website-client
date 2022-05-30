import React from "react";
import Slider from "react-slick";
import "./Clients.css";
import { Col, Container, Row } from "react-bootstrap";
const Clients = () => {
  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container className="text-center my-5">
        <h2 className="header-style">CLIENT SAYS</h2>
      </Container>
      <Slider {...settings}>
        <div className="">
          <Row className="text-center justify-content-center">
            <Col lg={6} md={6} sm={12}>
              <img
                className="image-size"
                src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg="
                alt=""
              />
              <h3>Istiak Islam</h3>
              <h6>
                <strong>CEO:</strong> Local Garden
              </h6>
              <p>
                The fruits in the warehouse are very good and fresh. It's so
                fresh. Formalin-free fresh fruit is available in the warehouse.
              </p>
            </Col>
          </Row>
        </div>
        <div className="">
          <Row className="text-center justify-content-center">
            <Col lg={6} md={6} sm={12}>
              <img
                className="image-size"
                src="https://areyouawellbeing.texashealth.org/wp-content/uploads/2018/03/men-testicular-cancer-670x402.jpg"
                alt=""
              />
              <h3>Arhan Ahmed</h3>
              <h6>
                <strong>CEO:</strong> Berry Farm
              </h6>
              <p>
                The fruits in the warehouse are very good and fresh. It's so
                fresh. Formalin-free fresh fruit is available in the warehouse.
              </p>
            </Col>
          </Row>
        </div>

        <div className="">
          <Row className="text-center justify-content-center">
            <Col lg={6} md={6} sm={12}>
              <img
                className="image-size"
                src="https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1608/vadymvdrobot160801171/61693782-closeup-of-cheerful-young-man-in-white-t-shirt-with-backpack-standing-and-smiling-in-forest.jpg?ver=6"
                alt=""
              />
              <h3>Md.Piyash</h3>
              <h6>
                <strong>CEO:</strong> Local Garden
              </h6>
              <p>
                The fruits in the warehouse are very good and fresh. It's so
                fresh. Formalin-free fresh fruit is available in the warehouse.
              </p>
            </Col>
          </Row>
        </div>
        <div className="">
          <Row className="text-center justify-content-center">
            <Col lg={6} md={6} sm={12}>
              <img
                className="image-size"
                src="https://cdn.pixabay.com/photo/2016/03/26/20/35/young-man-1281282_960_720.jpg"
                alt=""
              />
              <h3>Md. Asraf</h3>
              <h6>
                <strong>CEO:</strong> Happy Apple.
              </h6>
              <p>
                The fruits in the warehouse are very good and fresh. It's so
                fresh. Formalin-free fresh fruit is available in the warehouse.
              </p>
            </Col>
          </Row>
        </div>
      </Slider>
    </>
  );
};

export default Clients;
