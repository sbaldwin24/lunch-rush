import React, { PropTypes } from "react";
import map from "lodash/map";
import "./Restaurant.css";

class Restaurant extends React.Component {
  /**
   * @returns {object}
   */
  render() {
    return <article className="Restaurant" />;
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Restaurant;
