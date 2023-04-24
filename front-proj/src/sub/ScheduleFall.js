import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ImageWithText from "./ImageWithText";

const ScheduleFall = () => {
  const [isOn, setIsOn] = useState(true);
  const [isSpringHovered, setIsSpringHovered] = useState(false);
  const [isSummerHovered, setIsSummerHovered] = useState(false);
  const [isFallHovered, setIsFallHovered] = useState(false);
  const [isWinterHovered, setIsWinterHovered] = useState(false);
  return (
    <div className="sd-wrap">
      <div className="sd-sec-01">
        <div className="submenu-textbox">
          <div className="submenu-t submenu-text-1">
            <p>행사일정</p>
          </div>
          <div className="submenu-t submenu-text-2">
            <h2>가을</h2>
          </div>
        </div>
        <div className="submenu-imgs">
          <div className="submenu-i submenu-img-01">
            <img src="./img/sv_img01.png" alt="기타치는이미지" />
          </div>
          <div className="submenu-i submenu-img-02">
            <img src="./img/sv_img02.png" alt="노래부르는 이미지" />
          </div>
          <div className="submenu-i submenu-img-03">
            <img src="./img/sv_img03.png" alt="오른쪽 위 음표 이미지" />
          </div>
          <div className="submenu-i submenu-img-04">
            <img src="./img/sv_img04.png" alt="왼쪽 위 음표 이미지" />
          </div>
        </div>
      </div>
      <div className="sd-body">
        <div
          className="w-wave"
          style={{ backgroundImage: "src=img/w_wave/png" }}
        ></div>
        {/* main */}
        <div className="sd-sub-title">
          <ul className="season-menu">
            <li>
              <Link to={"/scheduleSpring"}>
                <div
                  className={`li-width  ${isSpringHovered ? "sd-point" : ""}`}
                  onMouseEnter={() => {
                    setIsOn(false);
                    setIsSpringHovered(true);
                  }}
                  onMouseLeave={() => {
                    setIsOn(true);
                    setIsSpringHovered(false);
                  }}
                >
                  봄
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/scheduleSummer"}>
                <div
                  onMouseEnter={() => {
                    setIsOn(false);
                    setIsSummerHovered(true);
                  }}
                  onMouseLeave={() => {
                    setIsOn(true);
                    setIsSummerHovered(false);
                  }}
                  className={`li-width  ${isSummerHovered ? "sd-point" : ""}`}
                >
                  여름
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/scheduleFall"}>
                <div
                  onMouseEnter={() => {
                    setIsOn(false);
                    setIsFallHovered(true);
                  }}
                  onMouseLeave={() => {
                    setIsOn(true);
                    setIsFallHovered(false);
                  }}
                  className={`li-width ${isOn ? "on" : ""} ${
                    isFallHovered ? "sd-point" : ""
                  }`}
                >
                  가을
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/scheduleWinter"}>
                <div
                  onMouseEnter={() => {
                    setIsOn(false);
                    setIsWinterHovered(true);
                  }}
                  onMouseLeave={() => {
                    setIsOn(true);
                    setIsWinterHovered(false);
                  }}
                  className={`white li-width  ${
                    isWinterHovered ? "sd-point" : ""
                  }`}
                >
                  겨울
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="sd-container">
          <div className="sd-back-img">
            <div className="sd-bi pp1">
              <img src="/img/pp1.png" />
            </div>
            <div className="sd-bi sd-1">
              <img src="/img/sd_1.png" />
            </div>
            <div className="sd-bi sd-2">
              <img src="/img/sd_2.png" />
            </div>
            <div className="sd-bi obj-1">
              <img src="/img/obj_01.png" />
            </div>
            <div className="sd-bi sd-4">
              <img src="/img/sd_4.png" />
            </div>
          </div>
          <table className="sd-content">
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <a href="">
                    <div className="sd-con-frame scf3">
                      {/* style={{  backgroundImage: "url('/img/p_jazz2.jpg')"}} */}
                      <ImageWithText
                        imageUrl="/img/Ready.jpg"
                        propsText={
                          <p>
                            <em>
                              2023
                              <br />
                              가을페스티벌 1
                            </em>
                          </p>
                        }
                      />
                    </div>
                  </a>
                  <div className="link-box">
                    <br />
                    <p>
                      2023 서울 드럼 페스티벌
                      <br />
                      2023. 4. 28 ~ 4. 30
                    </p>
                  </div>
                </td>
                <td>
                  <a href="">
                    <div className="">
                      <ImageWithText
                        imageUrl="/img/Ready.jpg"
                        propsText={
                          <p>
                            <em>
                              2023
                              <br />
                              가을페스티벌 2
                            </em>
                          </p>
                        }
                      />
                    </div>
                  </a>
                  <div className="link-box">
                    <p>
                      <br />
                      가을 페스티벌
                      <br /> 2023. 5. 4 ~ 5. 7
                    </p>
                  </div>
                </td>
                <td>
                  <a href="">
                    <div className="sd-con-frame scf4">
                      <ImageWithText
                        imageUrl="/img/Ready.jpg"
                        propsText={
                          <p>
                            <em>
                              2023
                              <br />
                              가을페스티벌 3
                            </em>
                          </p>
                        }
                      />
                    </div>
                  </a>
                  <div className="link-box">
                    <p>
                      <br />
                      가을 페스티벌
                      <br />
                      2023. 5. 13 ~ 5. 28
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="">
                    <div className="sd-con-frame scf4">
                      <ImageWithText
                        imageUrl="/img/Ready.jpg"
                        propsText={
                          <p>
                            <em>
                              2023
                              <br />
                              가을페스티벌 4
                            </em>
                          </p>
                        }
                      />
                    </div>
                  </a>
                  <div className="link-box">
                    <p>
                      <br />
                      가을 페스티벌
                      <br />
                      2023. 5. 5 ~ 5. 7
                    </p>
                  </div>
                </td>

                <td>
                  <a href="">
                    <div className="sd-con-frame scf2">
                      {/*  style={{  backgroundImage: "url('/img/p_jazz.gif')"}} */}
                      <ImageWithText
                        imageUrl="/img/Ready.jpg"
                        propsText={
                          <p>
                            <em>
                              2023
                              <br />
                              가을페스티벌 5
                            </em>
                          </p>
                        }
                      />
                    </div>
                  </a>
                  <div className="link-box">
                    <p>
                      <br />
                      가을 페스티벌
                      <br /> 2023. 5. 26 ~ 5. 28
                    </p>
                  </div>
                </td>
                <td>
                  <a href="">
                    <div className="sd-con-frame scf2">
                      {/*  style={{  backgroundImage: "url('/img/p_jazz.gif')"}} */}
                      <ImageWithText
                        imageUrl="/img/Ready.jpg"
                        propsText={
                          <p>
                            <em>
                              2023
                              <br />
                              가을페스티벌 6
                            </em>
                          </p>
                        }
                      />
                    </div>
                  </a>
                  <div className="link-box">
                    <p>
                      <br />
                      가을 페스티벌
                      <br /> 2023. 5. 26 ~ 5. 28
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScheduleFall;
