import React from "react";
import Card from "./Card";
import "./styles.css";

import photo1 from "../../assets/img/photo1.png";
import photo2 from "../../assets/img/photo2.png";

const Section = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 l5 section__first">
          <p className="title">Modern Interior</p>
          <p className="text">
            A full-Service residential & commercial interior design and staging
            company offering professional organizing & eco-services.
          </p>
          <a className="readMore" href>
            Read more →
          </a>
        </div>
   
        <div className="col s12 l7 section__second">
          <img className="img" src={photo1} alt="" />
          <Card
            text="Designed in 2020 by Aliza Webber"
            photo={photo2}
            name="Aliza Webber"
            position="Interior designer"
          />
        </div>
      </div>
      <footer className="footer">
        <hr/>
      <p>juanmiguelruiz @ DevChallenges.io</p>

      </footer>
    </div>
  );
};

export default Section;
