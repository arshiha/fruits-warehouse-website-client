import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import TypeWriterEffect from "react-typewriter-effect";
import { Link } from "react-router-dom";
import BannerAnimation from "../BannerAnimation/BannerAnimation.jsx";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <Container>
        <Row className="d-flex align-items-center my-5 ">
          <Col md={7} xs={12}>
            <h2 className="banner-title">
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "Red Hat Display",
                  color: "rgb(22, 162, 139)",
                  fontWeight: 350,
                  fontSize: "30px",
                }}
                startDelay={5000}
                cursorColor="#3F3D56"
                multiText={[
                  "Fresh Fruits",
                  "Fresh Fruits Warehouse",
                  "Fresh And Healty",
                ]}
                multiTextDelay={1000}
                typeSpeed={125}
              />
            </h2>
            <p className="banner-text">
              Our fruits fresh and healthy fruits. The fruits are brought
              directly from the producer and sold. This fruit is formalin free.
              This will keep the body healthy. Eat fresh fruit and stay healthy.
            </p>

            <Link to="/about">
              <Button className="button-style-2 btn btn-success">DETAIL</Button>
            </Link>
          </Col>
          <Col md={5} xs={12}>
            <BannerAnimation />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Banner;
