import React from "react";

const SoundSection = () => {
  const handleLearnMore = () => {
    const element = document.querySelector(".display-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().bottom,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">새로운 사운드 시스템</h2>
          <p className="text">기반을 다지다</p>
          <span className="description">
            ₩1,550,000부터(보상 판매* 미적용 가격)
          </span>
          <ul className="links">
            <li>
              <button className="button">구입하기</button>
            </li>
            <li>
              <a className="link" onClick={handleLearnMore}>
                자세히 알아보기
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoundSection;
