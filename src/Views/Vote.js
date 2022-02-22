import React from "react";
import PageHeader from "../Components/PageHeader";
import { Container, Row, Col } from "react-bootstrap";
import { CardArtWork } from "../Components/CardExhibition";

const styleSection = {
  margin: "20px 0 50px 0",
};

const SectionFilter = () => {
  return (
    <Container style={{ width: "100px", backgroundColor: "lightgrey", height: "100%"}}>
      filter
    </Container>
  );
};

const SectionVote = () => {
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
    {
      name: "5",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      url: "/",
    },
    {
      name: "6",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      url: "/",
    },
  ];
  let cards = cardsData.map((card) => (
    <Col>
      <CardArtWork title={card.name} description={card.description} />
    </Col>
  ));
  return (
    <Container style={styleSection}>
      <Row>{cards}</Row>
    </Container>
  );
};

export const Vote = () => {
  return (
    <Container className="page-margin">
      <PageHeader header={"探索總覽"} />
      <Row>
        <Col className="col-2">
          <SectionFilter />
        </Col>
        <Col className="col-10">
          <SectionVote />
        </Col>
      </Row>
    </Container>
  );
};
