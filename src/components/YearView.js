import React, { Component } from "react";
import BookView from "./BookView";
import SupaBase from "../services/SupaBase";
import { useParams } from "react-router-dom";

 class YearView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yearArray: [],
      uniqueArray: [],
    };
  }

  componentDidMount() {

    SupaBase.getAllYears()
      .then((PromiseResult) => {
        this.setState({ yearArray: PromiseResult });
        this.removeDuplicates();
      })
      .catch((e) => console.log(e));
  }

  removeDuplicates = () => {
    // console.log(this.state.yearArray);
    let newArr = this.state.yearArray.map((ar) => ar.year);
    let uniqueArray = [...new Set(newArr)];
    this.setState({ uniqueArray: uniqueArray });
  };

  render() {
    return (
      <div>
        <BookView array={{ array: this.state.uniqueArray, from: "year" }} />
      </div>
    );
  }
}
export default (props) => <YearView {...props} params={useParams()} />;
