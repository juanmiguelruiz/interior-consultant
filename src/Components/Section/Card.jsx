import React from "react";
import PropTypes from "prop-types";
import { Row, Col, CardPanel } from "react-materialize";

const Card = ({text, position, name, photo}) => {
  return (
    <Row>
      <Col s={12}>
        <CardPanel className="card__ic">
          <div className="row">
            <div className="col s3">
              <img src={photo} alt="" className="avatar__ic" />
            </div>
            <div className="col s9">
              <p className="name__ic">{name}</p>
              <p className="position__ic">{position}</p>
            </div>

            <div className="col s12">
              <span className="card__text">
                {text}
              </span>
            </div>
          </div>
        </CardPanel>
      </Col>
    </Row>
  );
};

Card.propTypes={
    name:PropTypes.string,
    photo:PropTypes.string,
    position:PropTypes.string,
    text:PropTypes.string,
}



export default Card;
