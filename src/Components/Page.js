import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../Components/PageHeader";

export const Page = () => {
  return (
    <Container className="page-margin">
      <PageHeader header="hhhh" />
      <SectionExhibition />
      <SectionEvent />
    </Container>
  )
}

export default Page;