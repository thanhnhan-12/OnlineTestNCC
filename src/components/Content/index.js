import React from "react";
import "./styles.scss";
import LogoNCC from "../../Images/logo.png";
import CSS from "../../Images/css-icon.png";
import HTML from "../../Images/html-icon.png";
import URL from "../../Images/url-icon.png";

function Content() {
  return (
    <div className="content">
      <div className="content-wrapper">
        {/* 1. Logo */}
        <div className="content-img">
          <img src={LogoNCC} alt="" srcset="" />
        </div>

        {/* 2. Content */}
        <div className="content-heading">
          <h2>Lorem ipsum dolor sit asmet?</h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </p>
          </div>
        </div>

        <div className="content-box">
          {/* Section 1 */}
          <div className="box first-box">
            <h2>Lorem ipsum dolor sit amet</h2>

            <div className="paragraph">
              <div className="icon">
                <img src={CSS} alt="" srcset="" />
              </div>
              <p className="first-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at
              </p>
            </div>

            <p className="second-para">
              ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
              ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
              porta massa in metus bibendum congue. Pellentesque ultrices
              vestibulum mattis.
            </p>
          </div>

          {/* Section 2 */}
          <div className="box second-box">
            <h2>Lorem ipsum dolor sit amet</h2>

            <div className="paragraph">
              <div className="icon">
                <img src={HTML} alt="" srcset="" />
              </div>
              <p className="first-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at
              </p>
            </div>

            <p className="second-para">
              ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
              ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
              porta massa in metus bibendum congue. Pellentesque ultrices
              vestibulum mattis.
            </p>
          </div>

          {/* Section 3 */}
          <div className="box third-box">
            <h2>Lorem ipsum dolor sit amet</h2>

            <div className="paragraph">
              <div className="icon">
                <img src={URL} alt="" srcset="" />
              </div>
              <p className="first-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at
              </p>
            </div>

            <p className="second-para">
              ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
              ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
              porta massa in metus bibendum congue. Pellentesque ultrices
              vestibulum mattis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
