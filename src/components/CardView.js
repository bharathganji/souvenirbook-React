import React from "react";
import { useParams } from "react-router-dom";
import "./css/CardView.css";

export default function CardView(props) {
  const array = props.array.array;
  const from = props.array.from;

  const cardviewlist = array.map((user) => {
    return (
      <div className="col-6 col-sm-6 col-md-4 col-lg-3" key={user.email}>
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src={user.img} />
          </div>
          <div className="team-content">
            <p className="name">{user.name}</p>
            <p className="email">{user.email}</p>
            <h4 className="title">{user.phone}</h4>
          </div>
          <ul className="social">
            <li>
              <a
                href="https://codepen.io/collection/XdWJOQ/"
                className="fa fa-facebook"
                aria-hidden="true"
              ></a>
            </li>
            <li>
              <a
                href="https://codepen.io/collection/XdWJOQ/"
                className="fa fa-twitter"
                aria-hidden="true"
              ></a>
            </li>
            <li>
              <a
                href="https://codepen.io/collection/XdWJOQ/"
                className="fa fa-google-plus"
                aria-hidden="true"
              ></a>
            </li>
            <li>
              <a
                href="https://codepen.io/collection/XdWJOQ/"
                className="fa fa-linkedin"
                aria-hidden="true"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    );
  });

  return (
    <div className="row">
      <>{cardviewlist}</>
    </div>
  );
}
