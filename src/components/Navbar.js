import React, { Component } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import "./css/NavBar.css";
import YearView from "./YearView";
import vrsec from "../../src/assets/vrsec.jpg";
import { logOut } from "../services/Auth";

class Navbar extends Component {
  render() {
    const a = { ...this.props.params };

    // console.log(JSON.stringify(a));

    const userData = JSON.parse(localStorage.getItem("userData"));
    // console.log(userData);

    let view;
    if (Object.keys(a).length == 0) {
      view = <YearView />;
    } else {
      view = <Outlet />;
    }

    const logout = () => {
      logOut();
      this.props.navigate("/");
    };
    return (
      <body className="body hold-transition  sidebar-mini">
        {/* // <div className=" hold-transition skin-blue sidebar-mini"> */}
        <div className="wrapper ">
          {/* <!-- Main Header --> */}
          <header className="main-header">
            {/* <!-- Logo --> */}
            <a className="logo">
              {/* <!-- mini logo for sidebar mini 50x50 pixels --> */}
              <span className="logo-mini">
                <img src={vrsec} style={{ width: 40 + "px" }} />
              </span>
              {/* <!-- logo for regular state and mobile devices --> */}
              <span className="logo-lg" style={{ fontFamily: "cursive" }}>
                <b>
                  <img
                    src={vrsec}
                    style={{ height: 40 + "px", width: 40 + "px" }}
                  />
                </b>{" "}
                SouvenirBook
              </span>
            </a>

            {/* <!-- Header Navbar --> */}
            <nav className="navbar navbar-static-top" role="navigation">
              {/* <!-- Sidebar toggle button--> */}
              <a
                href="#"
                className="sidebar-toggle"
                data-toggle="push-menu"
                role="button"
              >
                <span className="sr-only">Toggle navigation</span>
              </a>
              {/* <!-- Navbar Right Menu --> */}
              <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                  <li className="dropdown user user-menu">
                    {/* <!-- Menu Toggle Button --> */}
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      {/* <!-- The user image in the navbar--> */}
                      <img
                        src={userData.img}
                        className="user-image"
                        alt="User Image"
                      />
                      {/* <!-- hidden-xs hides the username on small devices so only the image appears. --> */}
                      <span className="hidden-xs">{userData.name}</span>
                    </a>
                    <ul className="dropdown-menu">
                      {/* <!-- The user image in the menu --> */}
                      <li className="user-header">
                        <img
                          src={userData.img}
                          className="img-circle"
                          alt="User Image"
                        />

                        <p>{userData.name}</p>
                      </li>

                      {/* <!-- Menu Footer--> */}
                      <li className="user-footer">
                        <div className="pull-left">
                          <a href="#" className="btn btn-default btn-flat">
                            Profile
                          </a>
                        </div>
                        <div className="pull-right">
                          <a
                            onClick={logout}
                            className="btn btn-default btn-flat"
                          >
                            Sign out
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- Control Sidebar Toggle Button --> */}
                </ul>
              </div>
            </nav>
          </header>
          {/* <!-- Left side column. contains the logo and sidebar --> */}
          <aside className="main-sidebar">
            {/* <!-- sidebar: style can be found in sidebar.less --> */}
            <section className="sidebar">
              {/* <!-- Sidebar Menu --> */}
              <ul className="sidebar-menu" data-widget="tree">
                <li className="header">NAVIGATION</li>
                {/* <!-- Optionally, you can add icons to the links --> */}
                <li className="active treeview">
                  <a href="#">
                    <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-flask"></i> <span>Tests</span>
                  </a>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-user-md"></i> <span>Doctors</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="">
                        <i className="fa fa-circle-o"></i>List
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-circle-o"></i>Add Doctors
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-location-arrow"></i> <span>Track</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-envelope"></i> <span>Messages</span>
                    <span className="pull-right-container">
                      <span className="label label-primary pull-right">14</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-clipboard"></i> <span>Results</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-cogs"></i> <span>Settings</span>
                  </a>
                </li>
              </ul>
              {/* <!-- /.sidebar-menu --> */}
            </section>
            {/* <!-- /.sidebar --> */}
          </aside>

          {/* <!-- Content Wrapper. Contains page content --> */}
          <div className="content-wrapper">
            {/* <!-- Content Header (Page header) --> */}

            <section className="content-header"></section>

            {/* <!-- Main content --> */}
            <section className="content ">
              {/* <YearView /> */}
              {view}
              {/* <!-- /.box --> */}
            </section>
            {/* <!-- /.content --> */}
          </div>
          {/* <!-- /.content-wrapper --> */}

          {/* <!-- Main Footer --> */}
          <footer className="main-footer">
            {/* <!-- Default to the left --> */}
            <strong>
              Copyright &copy; 2022 <a>VRSEC</a>.
            </strong>{" "}
            All rights reserved.
          </footer>
        </div>
        {/* //  </div> */}
      </body>
    );
  }
}

export default (props) => (
  <Navbar {...props} params={useParams()} navigate={useNavigate()} />
);
