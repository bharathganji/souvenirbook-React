import React, { Component, useEffect, useState } from "react";
import "./css/Login.css";
import { useNavigate } from "react-router-dom";
import Auth, { isLoggedIn, login } from "../services/Auth";

export default function Login() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  // let value = "init";
  async function onSubmit() {
    await login(name)
      .then((data) => {
        if (data == "ok") {
          navigate("/home");
        } else {
          alert("wrong pwd");
        }
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="bd">
      <div id="container">
        <div className="chat-bubble" id="ghost-bubble"></div>
        <input
          id="ghost-input"
          type="text"
          placeholder="enter registered EMAIL"
          onChange={(e) => setName(e.target.value)}
        />
        <div className="ghost">
          <div className="ghost__face">
            <div className="ghost__eyes">
              <div className="ghost__eyes-l"></div>
              <div className="ghost__eyes-r"></div>
            </div>
            <div className="ghost__mouth"></div>
          </div>
          <div className="ghost__torso"></div>
          <div className="ghost__hands">
            <div className="ghost__hands-l"></div>
            <div className="ghost__hands-r"></div>
          </div>
          <div className="ghost__legs"></div>
        </div>
        <div onClick={onSubmit}>
          <div className="button">
            <button className="w-100">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
