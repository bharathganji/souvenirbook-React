import React, { Component } from "react";
import BookView from "./BookView";
import SupaBase from "../services/SupaBase";
import { useParams } from "react-router-dom";

class DeptView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DeptArray: [],
      uniqueArray: [],
    };
  }

  componentDidMount() {
    const a = { ...this.props.params };

    SupaBase.getAllDepts(a)
      .then((PromiseResult) => {
        this.setState({ DeptArray: PromiseResult });
        this.removeDuplicates();
      })
      .catch((e) => console.log(e));
  }

  removeDuplicates = () => {
    let newArr = this.state.DeptArray.map((ar) => ar.dept);
    let uniqueArray = [...new Set(newArr)];
    this.setState({ uniqueArray: uniqueArray });
  };

  render() {
    return (
      <div>
        <BookView array={{ array: this.state.uniqueArray, from: "dept" }} />
      </div>
    );
  }
}
export default (props) => <DeptView {...props} params={useParams()} />;
