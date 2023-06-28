import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";

const Jumbotron = () => {
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" src={Iphone} alt="iPhone 14 Pro" />
      <p className="text">거대하고 더 거대하게.</p>
      <span className="description">
        ₩1,550,000부터(보상 판매* 미적용 가격)
      </span>
      <ul className="links">
        <li>
          <button className="button">구입하기</button>
        </li>
        <li>
          <a className="link">자세히 알아보기</a>
        </li>
      </ul>
      <img className="iphone-img" src={HoldingIphone} alt="iPhone" />
    </div>
  );
};

export default Jumbotron;
