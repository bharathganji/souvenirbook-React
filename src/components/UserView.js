import React, { Component } from "react";
import BookView from "./BookView";
import SupaBase from "../services/SupaBase";
import CardView from "./CardView";
import { useParams } from "react-router-dom";

class UserView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserArray: [],
      uniqueArray: [],
    };
  }

  componentDidMount() {
    const a = { ...this.props.params };
    SupaBase.getAllUsers(a)
      .then((PromiseResult) => {
        this.setState({ UserArray: PromiseResult });
      })
      .catch((e) => console.log(e));
  }

  removeDuplicates = () => {
    let newArr = this.state.UserArray.map((ar) => ar.User);
    let uniqueArray = [...new Set(newArr)];
    this.setState({ uniqueArray: uniqueArray });
    console.log(uniqueArray);
  };

  render() {
    return (
      <div>
        <CardView array={{ array: this.state.UserArray, from: "userview" }} />
      </div>
    );
  }
}
export default (props) => <UserView {...props} params={useParams()} />;
