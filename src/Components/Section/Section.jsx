import React from "react";
import Card from "./Card";

import photo1 from "../../assets/img/photo1.png";
import photo2 from "../../assets/img/photo2.png";
import './styles.css'

const Section = () => {
  return (
    <div className="container interior__container">
    <div className="row">
      <div className="col s12 l5 interior__section__first">
        <p className="interior__title">Modern Interior</p>
        <p className="interior__text">
          A full-Service residential & commercial interior design and staging
          company offering professional organizing & eco-services.
        </p>
        <a className="interior__read-more" href>
          Read more →
        </a>
      </div>

      <div className="col s12 l7 interior__section__second">
        <img className="interior__img" src={photo1} alt="" />
        <Card
          text="Designed in 2020 by Aliza Webber"
          photo={photo2}
          name="Aliza Webber"
          position="Interior designer"
        />
      </div>
    </div>
    <footer className="interior__footer">
      <hr />
      <p>juanmiguelruiz @ DevChallenges.io</p>
    </footer>
  </div>
  );
};

export default Section;
