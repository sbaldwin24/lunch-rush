import React, { PropTypes } from "react";
import Restaurant from "./Restaurant";
import map from "lodash/map";
import "./Restaurants.css";

class Restaurants extends React.Component {
  /**
   * @returns {object}
   */
  render() {
    return <section className="Restaurants" />;
  }
}

Restaurants.propTypes = {
  user: PropTypes,
  restaurantsRef: PropTypes.object,
  restaurants: PropTypes.object
};

export default Restaurants;
