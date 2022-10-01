import React, { Component } from "react";
import ScrapYardNavbar from "../components/ScrapYardNavbar";
// import { Card } from "reactstrap";

import "./AboutUs.css";
import Card4 from "./Card4";
import Cards from "./Cards";

export class About extends Component {
    render() {
        return (
            <div id="main">
                <ScrapYardNavbar />
                <div id="div1">
                    <h2 id="head1">About Us</h2>

                    <p id="p1">
                        The <b className="text-primary"> ScrapYard </b> is a web-application which is used to organize the Scrap
                        management system.
                    </p>
                </div>

                <hr id="hr" />

                {/* <div id="div2"> */}
                <h2 className="head2">Founders Message</h2>

                <p id="p2">"Scrap isn't waste until we waste it.”</p>
                <p id="p3">
                    One such problem that has caught people’s attention in the current
                     scenario is the ever-increasing waste and our inability to deal with
                      it. With the ever-growing human population and increasing living
                       standard of people, new settlements are seen burgeoning and 
                       industries have also been established to meet the growing human 
                       needs for survival. Of course, new agricultural methods are adopted
                        with the help of pesticides and fertilizers for meeting the 
                        growing consumption needs. So many other things are also practised
                         for a comfy living. In return, waste matter is generated from 
                         industrial and domestic activities, which is dumped into our
                          surroundings.
                </p>


                <hr id="hr" />

                <div id="div3">
                    <h2 className="head2">Our Core Values</h2>
                    <div id="div4">
                        <Cards />
                    </div>
                </div>

                <hr id="hr" />

                <div id="div4">
                    <h2 className='head2'>Our Belief</h2>
                    <p id="p4">
                        We believe that India can be a greener and cleaner country, as every
                        household commits to getting their dry scrap recycled, not only
                        resources can be saved from over-exploitation, but the landfills
                        with mixed harmful garbage can be eradicated.
                    </p>

                    <Card4 />

                </div>




            </div>
        );
    }
}

export default About;