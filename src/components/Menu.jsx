import React from "react";
import dishes from "../data/menu.json";
import SingleDish from "./SingleDish.jsx";
import { Alert, Container } from "react-bootstrap";

const Menu = () => (
  <Container>
    {dishes && dishes.map((dish) => <SingleDish dish={dish} key={dish.id} />)}
    {dishes.length === 0 && (
      <Alert className="mt-5" variant="warning">
        Work In Progress
      </Alert>
    )}
  </Container>
);
export default Menu;
