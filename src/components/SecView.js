import React, { Component } from "react";
import BookView from "./BookView";
import SupaBase from "../services/SupaBase";
import { useParams } from "react-router-dom";

class SecView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SecArray: [],
      uniqueArray: [],
    };
  }

  componentDidMount() {
    const a = { ...this.props.params };

    SupaBase.getAllSecs(a)
      .then((PromiseResult) => {
        this.setState({ SecArray: PromiseResult });
        this.removeDuplicates();
      })
      .catch((e) => console.log(e));
  }

  removeDuplicates = () => {
    let newArr = this.state.SecArray.map((ar) => ar.sec);
    let uniqueArray = [...new Set(newArr)];
    this.setState({ uniqueArray: uniqueArray });
  };
  render() {
    return (
      <div>
        <BookView array={{ array: this.state.uniqueArray, from: "sec" }} />
      </div>
    );
  }
}

export default (props) => <SecView {...props} params={useParams()} />;
