import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardGroup,
  CardDeck,
} from "reactstrap";

import "./Cards.css";

const Cards = (props) => {
  return (
    <div id="div1">
      <CardGroup>
        <div id="div2">
          <Card id="card1">
            <CardBody>
              <CardTitle className="title">Vision</CardTitle>
              {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
              <CardText className="text">
                Our vision is to bring a circular economy into a reality where
                used products are manufactured into new products to minimize the
                over-exploitation of natural resources and maximize recycling.
              </CardText>
            </CardBody>
          </Card>
        </div>

        <div id="div2">
          <Card id="card2">
            <CardBody>
              <CardTitle className="title">Mision</CardTitle>

              <CardText className="text">
                Our mission is to make a world where nothing is wasted, the
                communities from around the globe building an eco-system of
                sustainable living through doing the right scrap treatment that
                is to get it recycled.
              </CardText>
            </CardBody>
          </Card>
        </div>

        <div id="div2">
          <Card id="card3">
            <CardBody>
              <CardTitle className="title">Goal</CardTitle>

              <CardText className="text">
                Through continuous innovation of technology, our goal is to make
                recycling achievable and accessible to all, from institutions to
                individuals.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </CardGroup>
    </div>
  );
};

export default Cards;