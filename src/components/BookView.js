import React, { Component } from "react";
import "./css/BookView.css";
import "animate.css";

import OrangeBook from "../../src/assets/OrangeBook.svg";
import BlueBook from "../../src/assets/BlueBook.svg";
import GreenBook from "../../src/assets/GreenBook.svg";
import RedBook from "../../src/assets/RedBook.svg";
import { Link, useParams } from "react-router-dom";

class BookView extends Component {
  render() {
    const array = this.props.array.array;
    const from = this.props.array.from;
    const a = { ...this.props.params };
    // console.log(JSON.stringify(a) + " params " + from);
    let book = OrangeBook;

    if (from == "dept") {
      book = BlueBook;
    } else if (from == "sec") {
      book = GreenBook;
    }
    function delayUrlLoad(url) {
      setTimeout(function () {
        window.location.href = url;
      }, 1000);
    }
    const Bookviewlist = array.map((arr) => {
      return (
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 " key={arr}>
          <Link to={arr} >
            <div className=" glassBox">
              <div className="  glassBox__imgBox ">
                <img src={book} alt="" className="animate__heartBeat" />
                <h3 className=" animate__slideInDown glassBox__title  ">
                  {arr}
                </h3>
              </div>
            </div>
          </Link>
        </div>
      );
    });

    return (
      <div className="row">
        <>{Bookviewlist}</>
      </div>
    );
  }
}
export default (props) => <BookView {...props} params={useParams()} />;
