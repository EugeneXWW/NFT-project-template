import React from 'react'
import PageHeader from "../Components/PageHeader";
import { Container, Row, Col } from "react-bootstrap";
import { CardEvent } from "../Components/CardExhibition";

const styleSection = {
  margin: "20px 0 50px 0",
};

const SectionEvent = () => {
  let cardsData = [
    {
      name: "Event 1",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      url: "/",
    },
    {
      name: "Event 2",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      url: "/",
    },
    {
      name: "Event 3",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      url: "/",
    },
    {
      name: "Event 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      url: "/",
    },
    {
      name: "Event 5",
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
      <Row>{cards}</Row>
    </Container>
  );
};


export const Event = () => {
  return (
    <Container className="page-margin">
      <PageHeader header={'活動總覽'} />
      <SectionEvent />
    </Container>
  );
}
