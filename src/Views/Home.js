import React from "react";
import PageHeader from "../Components/PageHeader";
import { Container, Row, Col } from "react-bootstrap";
import { CardExhibition, CardEvent } from "../Components/CardExhibition";

const styleSection = {
  margin: "20px 0 50px 0",
};

const SectionExhibition = () => {
  let cardsData = [
    {
      name: "1",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      url: "/",
    },
    {
      name: "2",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      url: "/",
    },
    {
      name: "3",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      url: "/",
    },
    {
      name: "4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      url: "/",
    },
  ];
  let cards = cardsData.map((card) => (
    <Col>
      <CardExhibition title={card.name} description={card.description} />
    </Col>
  ));
  return (
    <Container style={styleSection}>
      <Row>{cards}</Row>
    </Container>
  );
};

const SectionEvent = () => {
  let cardsData = [
    {
      name: "1",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      url: "/",
    },
    {
      name: "2",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      url: "/",
    },
    {
      name: "3",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      url: "/",
    },
  ];
  let cards = cardsData.map((card) => (
    <Col>
      <CardEvent title={card.name} description={card.description} />
    </Col>
  ));
  return (
    <Container style={styleSection}>
      <PageHeader header={'活動'} />
      <Row>{cards}</Row>
    </Container>
  );
};

const Home = () => {
  return (
    <Container className="page-margin">
      <SectionExhibition />
      <SectionEvent />
    </Container>
  );
};

export default Home;
