import React from "react";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
  CardGroup,
} from "reactstrap";
import "./Cards.css";

const Card4 = (props) => {
  return (
    <div>
      <div id="card4div1">
        <CardGroup>
        <Card id="card4">
          <CardBody>
            <CardTitle className="title">Minizing Landfills</CardTitle>
            <CardText>
              <ul>
                <li className="text2">
                  Landfills are spreading across India at a first at a fast pace
                  making it more complex each day to manage the waste management
                  value chain.
                </li>

                <li className="text2">
                  But, this can be tackled only when we start waste management
                  from our Homes in the way of waste segregation. Waste
                  segregation is the process of differentiating dry and wet
                  waste and disposing of it into two different beans.
                </li>

                <li className="text2">
                  We get the dry segregated waste recycled as you sell your
                  scrap to us. If we inculcate the habits of "avoiding tossing
                  trash anywhere" and adopting daily waste segregation, remember
                  we're coming one step ahead in reducing landfills.
                </li>
              </ul>
            </CardText>
            <CardText></CardText>
          </CardBody>
        </Card>

        <CardImg id="img2" src="https://media.istockphoto.com/photos/scrap-metal-heap-picture-id1307920665?b=1&k=20&m=1307920665&s=170667a&w=0&h=SLkJ3fgQlALhHM4nhvUidlFXXgXnn0TYtMPp1t3TOLk="></CardImg>
        </CardGroup>

      </div>

      <div id="card4div2">
        <Card id="card5">
          <CardBody>
            <CardTitle className="title">Maximizing Recycling</CardTitle>
            <CardText className="text2">
              <ul>
                <li className="text2">
                  To make a larger impact, along with serving households. The
                  <b className="text-primary"> ScrapYard </b> is a recycling
                  partner to small to big businesses and corporates to
                  institutions with the aim to build a conscious ecosystem on a
                  societal level.
                </li>

                <li className="text2">
                    To acelerate the recycling, the <b className="text-primary"> ScrapYard </b> are going to manage Pune city's huge garbage dumps at 4 Material Recovery Facilities commonly known as MRF centers. Where everyday, more than 50 kgs of scrap are segregated by our Scrap workers.     
                </li>

                <li className="text2">
                    The <b className="text-primary"> ScrapYard </b> campaigns with big organizations like Tetra Pak India and Indian Sleep Products Federations (ISPF) based on recycling of daily utility products like Used beverage Cartons and used mattresses respectively helps us maximize recycling extensively. 
                </li>
              </ul>
            </CardText>
            <CardText></CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Card4;