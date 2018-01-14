import React from "react";
import { auth, database } from "./firebase";
import CurrentUser from "./CurrentUser";
import SignIn from "./SignIn";
import NewRestaurant from "./NewRestaurant";
import Restaurant from "./Restaurants";
import "./Application.css";
import map from "lodash/map";

class Application extends React.Component {
  state = {
    currentUser: null,
    restaurants: null
  };

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({
        currentUser
      });

      this.restaurantRef = database.ref("restaurants");
      this.restaurantRef.on("value", snapshot => {
        this.setState({
          restaurants: snapshot.val()
        });
      });
    });
  }

  render() {
    const { currentUser, restaurants } = this.state;
    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Lunch Rush</h1>
        </header>
        <div>
          {!currentUser && <SignIn />}
          {currentUser && (
            <div>
              <NewRestaurant />
              {map(restaurants, (restaurant, key) => (
                <p key={key}>{restaurant.name}</p>
              ))}
              <CurrentUser user={currentUser} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Application;
