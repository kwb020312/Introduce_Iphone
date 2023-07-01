import React from "react";

const DisplaySection = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="display-section wrapper">
      <h2 className="title">혁신</h2>
      <p className="text">대단함</p>
      <span className="description">
        강한 햇빛에도 두배로 잘 보이는 디스플레이
      </span>
      <button className="button">테스트하기!</button>
      <button className="back-button" onClick={handleScrollToTop}>
        상단으로
      </button>
    </div>
  );
};

export default DisplaySection;
