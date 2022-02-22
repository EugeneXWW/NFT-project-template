import React from "react";
import { Button, Card } from "react-bootstrap";
import { MyButton } from './MyButton';

export const CardExhibition = (props) => {
  return (
    <Card title={props.title} style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>展示作品 {props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <MyButton />
      </Card.Body>
    </Card>
  );
};

export const CardEvent = (props) => {
  return (
    <Card title={props.title} style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>活動 {props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <MyButton />
      </Card.Body>
    </Card>
  );
};

export const CardArtWork = (props) => {
  return (
    <Card title={props.title} style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>作品 {props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <MyButton />
      </Card.Body>
    </Card>
  );
};
