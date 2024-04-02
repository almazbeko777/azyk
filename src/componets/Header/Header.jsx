import React from "react";
import logoDark from "../img/logotip.jpg";
import { PiPhoneCallBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import "../Header/Header.css";
import { GrLocation } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header-logo-addres">
            <Link to={"/"}>
              <img src={logoDark} alt="img" width={180} />
            </Link>

            <GrLocation size={20} className="header-location header-icon-1" />
            <select className="header-select">
              <option>Бишкек</option>
              <option>Бишкек</option>
              <option>Бишкек</option>
            </select>
          </div>

          <div className="header-nav">
            <h5 className="header-search">
              <FaSearch className="header-icon-1" />
            </h5>
            <input
              type="text"
              className="header-input"
              placeholder="Поиск товаров ..."
            />

            <a href="tel:+996500182838">
              {" "}
              <PiPhoneCallBold
                size={21}
                color="black"
                className="header-icon-1"
              />
            </a>
            <div className="header-line"></div>
            <h5 className="header-count header-icon-1">3</h5>
            <FaRegHeart size={20} cursor="pointer" className="header-icon-1" />
            <div className="header-line"></div>
            <div className="header-user">
              <Link to={"/user"}>
                {" "}
                <FaRegUser
                  size={20}
                  className="header-icon-1"
                  style={{
                    color: "black",
                  }}
                />
              </Link>

              {/* <h4>Войти</h4> */}
            </div>
          </div>
        </div>
        <div className="header-down-line line-flud"></div>
        <div className="header-down">
          <div className="select-category">
            <CgMenu size={20} className="header-icon-1" />
            <h2>Выберите категории</h2>
          </div>
          <div className="header-down-nav">
            <NavLink to={"/"}>
              <h1>главная</h1>
            </NavLink>
            <NavLink to={"/product"}>
              <h1>Продукты</h1>
            </NavLink>
            <NavLink to={"/shop"}>
              <h1>Магазины</h1>
            </NavLink>
            <NavLink to={"/contact"}>
              {" "}
              <h1>Контакты</h1>
            </NavLink>
          </div>
          <div className="header-down-cart header-icon-1">
            <BsCart4 className="cart header-icon-1" />
            <h2>Корзина</h2>
          </div>
        </div>
      </div>
      <div className="header-down-line"></div>
    </div>
  );
};

export default Header;
