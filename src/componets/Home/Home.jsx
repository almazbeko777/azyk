import React from "react";
import "../Home/Home.css";
import { FaRegHeart } from "react-icons/fa";
import ovoshi from "../img/ovoshi.png";
import sufruct from "../img/сухфрукты.png";
import oreh from "../img/oreh.png";
import milk from "../img/сут.png";
import meat from "../img/meat.png";
import fruits from "../img/fruits.png";
import honey from "../img/honey.png";
import abirkort from "../img/Apricot.png";
import { BsCart4 } from "react-icons/bs";
import apple from "../img/apple1.png";
const Home = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="products-scrool ">
            <div className="product-scrool sc-1">
              <div className="inner-content">
                <h2>15 % </h2>
                <h3>
                  Добавить избранный <FaRegHeart className="icon-scrool" />
                </h3>
                <h4>Овощи</h4>
              </div>
              <div className="inner-buy translate">Подробнее</div>
            </div>

            <div className="product-scrool sc-2">
              <div className="inner-content">
                <h2>15 % </h2>
                <h3>
                  Добавить избранный <FaRegHeart className="icon-scrool" />
                </h3>
                <h4>Овощи</h4>
              </div>
              <div className="inner-buy translate">Подробнее</div>
            </div>
            <div className="product-scrool sc-3">
              <div className="inner-content">
                <h2>15 % </h2>
                <h3>
                  Добавить избранный <FaRegHeart className="icon-scrool" />
                </h3>
                <h4>Овощи</h4>
              </div>
              <div className="inner-buy translate">Подробнее</div>
            </div>
          </div>
          <h2 className="shop-cat">
            Магазин по
            <span>
              <br /> Категории
            </span>
          </h2>
          <div className="category">
            <div class="card2">
              <div class="card-info">
                <img
                  src={ovoshi}
                  alt="img"
                  className="category-img"
                  width={180}
                />
              </div>
              <ul class="card-social">
                <li class="card-social__item">
                  <h2 className="category-name">Овощи</h2>
                </li>
              </ul>
            </div>
            <div class="card2">
              <div class="card-info">
                <img
                  src={milk}
                  alt="img"
                  className="category-img"
                  width={200}
                  height={130}
                />
              </div>
              <ul class="card-social">
                <li class="card-social__item">
                  <h2 className="category-name">Молочные</h2>
                </li>
              </ul>
            </div>
            <div class="card2">
              <div class="card-info">
                <img
                  src={sufruct}
                  alt="img"
                  className="category-img"
                  width={150}
                />
              </div>
              <ul class="card-social">
                <li class="card-social__item">
                  <h2 className="category-name">Сухофрукты</h2>
                </li>
              </ul>
            </div>
            <div class="card2">
              <div class="card-info">
                <img
                  src={meat}
                  alt="img"
                  className="category-img"
                  width={170}
                />
              </div>
              <ul class="card-social">
                <li class="card-social__item">
                  <h2 className="category-name">Мясо</h2>
                </li>
              </ul>
            </div>
            <div class="card2">
              <div class="card-info">
                <img
                  src={oreh}
                  alt="img"
                  className="category-img"
                  width={120}
                />
              </div>
              <ul class="card-social">
                <li class="card-social__item">
                  <h2 className="category-name">Орехи</h2>
                </li>
              </ul>
            </div>
            <div class="card2">
              <div class="card-info">
                <img
                  src={fruits}
                  alt="img"
                  className="category-img"
                  width={180}
                />
              </div>
              <ul class="card-social">
                <li class="card-social__item">
                  <h2 className="category-name">Фрукты</h2>
                </li>
              </ul>
            </div>
            <div class="card2">
              <div class="card-info">
                <img
                  src={honey}
                  alt="img"
                  className="category-img"
                  width={140}
                />
              </div>
              <ul class="card-social">
                <li class="card-social__item">
                  <h2 className="category-name">Мед</h2>
                </li>
              </ul>
            </div>
          </div>
          <h2 className="shop-cat">
            Для вас
            <span>
              <br />
              Лучшие рекомендуемые продукты
            </span>
          </h2>
          <div className="top-products">
            <div class="card">
              <div class="card-info">
                <div className="top-div-likes ">
                  <h2 className="translement">15 %</h2>
                  <div className="top-like translate">
                    <FaRegHeart className="top-like-icon" />
                  </div>
                </div>
                <img
                  src={abirkort}
                  alt="img"
                  width={230}
                  className="translate"
                />

                <div className="top-product-content">
                  <h2>Доступно (на складе) </h2>
                  <h3>Абрикос</h3>
                  <div className="price-top">
                    <span> 150 сом</span>120 сом
                  </div>
                </div>
              </div>
              <ul class="card-social">
                <li class="card-social__item">
                  <div className="top-count-product">
                    <div className="top-plus translate">-</div>
                    <div className="top-count">1</div>
                    <div className="top-plus translate">+</div>
                  </div>
                </li>
                <li class="card-social__item">
                  <BsCart4 className="top-cart translement" />
                </li>
              </ul>
            </div>
            <div class="card">
              <div class="card-info">
                <div className="top-div-likes ">
                  <h2 className="translement">15 %</h2>
                  <div className="top-like translate">
                    <FaRegHeart className="top-like-icon" />
                  </div>
                </div>
                <img src={apple} alt="img" width={180} className="translate" />

                <div className="top-product-content">
                  <h2>Доступно (на складе) </h2>
                  <h3>Яблоко</h3>
                  <div className="price-top">
                    <span> 150 сом</span>120 сом
                  </div>
                </div>
              </div>
              <ul class="card-social">
                <li class="card-social__item">
                  <div className="top-count-product">
                    <div className="top-plus translate">-</div>
                    <div className="top-count">1</div>
                    <div className="top-plus translate">+</div>
                  </div>
                </li>
                <li class="card-social__item">
                  <BsCart4 className="top-cart translement" />
                </li>
              </ul>
            </div>
            <div class="card">
              <div class="card-info">
                <div className="top-div-likes ">
                  <h2 className="translement">15 %</h2>
                  <div className="top-like translate">
                    <FaRegHeart className="top-like-icon" />
                  </div>
                </div>
                <img
                  src={abirkort}
                  alt="img"
                  width={230}
                  className="translate"
                />

                <div className="top-product-content">
                  <h2>Доступно (на складе) </h2>
                  <h3>Абрикос</h3>
                  <div className="price-top">
                    <span> 150 сом</span>120 сом
                  </div>
                </div>
              </div>
              <ul class="card-social">
                <li class="card-social__item">
                  <div className="top-count-product">
                    <div className="top-plus translate">-</div>
                    <div className="top-count">1</div>
                    <div className="top-plus translate">+</div>
                  </div>
                </li>
                <li class="card-social__item">
                  <BsCart4 className="top-cart translement" />
                </li>
              </ul>
            </div>
            <div class="card">
              <div class="card-info">
                <div className="top-div-likes ">
                  <h2 className="translement">15 %</h2>
                  <div className="top-like translate">
                    <FaRegHeart className="top-like-icon" />
                  </div>
                </div>
                <img
                  src={abirkort}
                  alt="img"
                  width={230}
                  className="translate"
                />

                <div className="top-product-content">
                  <h2>Доступно (на складе) </h2>
                  <h3>Абрикос</h3>
                  <div className="price-top">
                    <span> 150 сом</span>120 сом
                  </div>
                </div>
              </div>
              <ul class="card-social">
                <li class="card-social__item">
                  <div className="top-count-product">
                    <div className="top-plus translate">-</div>
                    <div className="top-count">1</div>
                    <div className="top-plus translate">+</div>
                  </div>
                </li>
                <li class="card-social__item">
                  <BsCart4 className="top-cart translement" />
                </li>
              </ul>
            </div>
            <div class="card">
              <div class="card-info">
                <div className="top-div-likes ">
                  <h2 className="translement">15 %</h2>
                  <div className="top-like translate">
                    <FaRegHeart className="top-like-icon" />
                  </div>
                </div>
                <img
                  src={abirkort}
                  alt="img"
                  width={230}
                  className="translate"
                />

                <div className="top-product-content">
                  <h2>Доступно (на складе) </h2>
                  <h3>Абрикос</h3>
                  <div className="price-top">
                    <span> 150 сом</span>120 сом
                  </div>
                </div>
              </div>
              <ul class="card-social">
                <li class="card-social__item">
                  <div className="top-count-product">
                    <div className="top-plus translate">-</div>
                    <div className="top-count">1</div>
                    <div className="top-plus translate">+</div>
                  </div>
                </li>
                <li class="card-social__item">
                  <BsCart4 className="top-cart translement" />
                </li>
              </ul>
            </div>
            <div class="card">
              <div class="card-info">
                <div className="top-div-likes ">
                  <h2 className="translement">15 %</h2>
                  <div className="top-like translate">
                    <FaRegHeart className="top-like-icon" />
                  </div>
                </div>
                <img
                  src={abirkort}
                  alt="img"
                  width={230}
                  className="translate"
                />

                <div className="top-product-content">
                  <h2>Доступно (на складе) </h2>
                  <h3>Абрикос</h3>
                  <div className="price-top">
                    <span> 150 сом</span>120 сом
                  </div>
                </div>
              </div>
              <ul class="card-social">
                <li class="card-social__item">
                  <div className="top-count-product">
                    <div className="top-plus translate">-</div>
                    <div className="top-count">1</div>
                    <div className="top-plus translate">+</div>
                  </div>
                </li>
                <li class="card-social__item">
                  <BsCart4 className="top-cart translement" />
                </li>
              </ul>
            </div>
            <div class="card">
              <div class="card-info">
                <div className="top-div-likes ">
                  <h2 className="translement">15 %</h2>
                  <div className="top-like translate">
                    <FaRegHeart className="top-like-icon" />
                  </div>
                </div>
                <img
                  src={abirkort}
                  alt="img"
                  width={230}
                  className="translate"
                />

                <div className="top-product-content">
                  <h2>Доступно (на складе) </h2>
                  <h3>Абрикос</h3>
                  <div className="price-top">
                    <span> 150 сом</span>120 сом
                  </div>
                </div>
              </div>
              <ul class="card-social">
                <li class="card-social__item">
                  <div className="top-count-product">
                    <div className="top-plus translate">-</div>
                    <div className="top-count">1</div>
                    <div className="top-plus translate">+</div>
                  </div>
                </li>
                <li class="card-social__item">
                  <BsCart4 className="top-cart translement" />
                </li>
              </ul>
            </div>
            <div class="card">
              <div class="card-info">
                <div className="top-div-likes ">
                  <h2 className="translement">15 %</h2>
                  <div className="top-like translate">
                    <FaRegHeart className="top-like-icon" />
                  </div>
                </div>
                <img
                  src={abirkort}
                  alt="img"
                  width={230}
                  className="translate"
                />

                <div className="top-product-content">
                  <h2>Доступно (на складе) </h2>
                  <h3>Абрикос</h3>
                  <div className="price-top">
                    <span> 150 сом</span>120 сом
                  </div>
                </div>
              </div>
              <ul class="card-social">
                <li class="card-social__item">
                  <div className="top-count-product">
                    <div className="top-plus translate">-</div>
                    <div className="top-count">1</div>
                    <div className="top-plus translate">+</div>
                  </div>
                </li>
                <li class="card-social__item">
                  <BsCart4 className="top-cart translement" />
                </li>
              </ul>
            </div>
            <div class="card">
              <div class="card-info">
                <div className="top-div-likes ">
                  <h2 className="translement">15 %</h2>
                  <div className="top-like translate">
                    <FaRegHeart className="top-like-icon" />
                  </div>
                </div>
                <img
                  src={abirkort}
                  alt="img"
                  width={230}
                  className="translate"
                />

                <div className="top-product-content">
                  <h2>Доступно (на складе) </h2>
                  <h3>Абрикос</h3>
                  <div className="price-top">
                    <span> 150 сом</span>120 сом
                  </div>
                </div>
              </div>
              <ul class="card-social">
                <li class="card-social__item">
                  <div className="top-count-product">
                    <div className="top-plus translate">-</div>
                    <div className="top-count">1</div>
                    <div className="top-plus translate">+</div>
                  </div>
                </li>
                <li class="card-social__item">
                  <BsCart4 className="top-cart translement" />
                </li>
              </ul>
            </div>
            <div class="card">
              <div class="card-info">
                <div className="top-div-likes ">
                  <h2 className="translement">15 %</h2>
                  <div className="top-like translate">
                    <FaRegHeart className="top-like-icon" />
                  </div>
                </div>
                <img
                  src={abirkort}
                  alt="img"
                  width={230}
                  className="translate"
                />

                <div className="top-product-content">
                  <h2>Доступно (на складе) </h2>
                  <h3>Абрикос</h3>
                  <div className="price-top">
                    <span> 150 сом</span>120 сом
                  </div>
                </div>
              </div>
              <ul class="card-social">
                <li class="card-social__item">
                  <div className="top-count-product">
                    <div className="top-plus translate">-</div>
                    <div className="top-count">1</div>
                    <div className="top-plus translate">+</div>
                  </div>
                </li>
                <li class="card-social__item">
                  <BsCart4 className="top-cart translement" />
                </li>
              </ul>
            </div>
          </div>
          <h2 className="shop-cat">
            Для вас
            <span>
              <br />
              Лучшие рекомендуемые продукты
            </span>
          </h2>
          <div className="best-products">
            <div className="best-product">
              <h2>
                Daily Essentials <br /> <span>20% off Everyday</span>
              </h2>
              <div className="best-product-btn translate">SHOP NOW</div>
            </div>
            <div className="best-product ">
              <h2>
                Daily Essentials <br /> <span>20% off Everyday</span>
              </h2>
              <div className="best-product-btn translate ">SHOP NOW</div>
            </div>
            <div className="best-product">
              <h2>
                Daily Essentials <br /> <span>20% off Everyday</span>
              </h2>
              <div className="best-product-btn translate ">SHOP NOW</div>
            </div>
          </div>

          <div className="shike">
            <svg
              preserveAspectRatio="none"
              viewBox="0 0 1200 120"
              xmlns="http://www.w3.org/2000/svg"
              className="shike1"
            >
              <path
                d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
                opacity=".25"
              />
              <path
                d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
                opacity=".5"
              />
              <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
            </svg>
            <h2>Get $5 Cashback! Min Order of $50</h2>
            <div className="product-futter-down translate ">
              USE CODE : COMBOSUPERR2a
            </div>
          </div>
          <h2 className="shop-cat">
            Для вас
            <span>
              <br />
              Новые продукты
            </span>
          </h2>
          <div className="top-products">
            <div class="card_box card">
              <div class="span"></div>
              <img src={apple} alt="img" className="translate" width={180} />
              <div className="top-product-content">
                <h2>Доступно (на складе) </h2>
                <h3>Яблоко</h3>
                <div className="price-top">
                  <span> 150 сом</span>120 сом
                </div>
                <div className="top-button translate">Смотреть</div>
              </div>
            </div>{" "}
            <div class="card_box card">
              <div class="span"></div>
              <img src={apple} alt="img" className="translate" width={180} />
              <div className="top-product-content">
                <h2>Доступно (на складе) </h2>
                <h3>Яблоко</h3>
                <div className="price-top">
                  <span> 150 сом</span>120 сом
                </div>
                <div className="top-button translate">Смотреть</div>
              </div>
            </div>{" "}
            <div class="card_box card">
              <div class="span"></div>
              <img src={apple} alt="img" className="translate" width={180} />
              <div className="top-product-content">
                <h2>Доступно (на складе) </h2>
                <h3>Яблоко</h3>
                <div className="price-top">
                  <span> 150 сом</span>120 сом
                </div>
                <div className="top-button translate">Смотреть</div>
              </div>
            </div>{" "}
            <div class="card_box card">
              <div class="span"></div>
              <img src={apple} alt="img" className="translate" width={180} />
              <div className="top-product-content">
                <h2>Доступно (на складе) </h2>
                <h3>Яблоко</h3>
                <div className="price-top">
                  <span> 150 сом</span>120 сом
                </div>
                <div className="top-button translate">Смотреть</div>
              </div>
            </div>{" "}
            <div class="card_box card">
              <div class="span"></div>
              <img src={apple} alt="img" className="translate" width={180} />
              <div className="top-product-content">
                <h2>Доступно (на складе) </h2>
                <h3>Яблоко</h3>
                <div className="price-top">
                  <span> 150 сом</span>120 сом
                </div>
                <div className="top-button translate">Смотреть</div>
              </div>
            </div>{" "}
            <div class="card_box card">
              <div class="span"></div>
              <img src={apple} alt="img" className="translate" width={180} />
              <div className="top-product-content">
                <h2>Доступно (на складе) </h2>
                <h3>Яблоко</h3>
                <div className="price-top">
                  <span> 150 сом</span>120 сом
                </div>
                <div className="top-button translate">Смотреть</div>
              </div>
            </div>{" "}
            <div class="card_box card">
              <div class="span"></div>
              <img src={apple} alt="img" className="translate" width={180} />
              <div className="top-product-content">
                <h2>Доступно (на складе) </h2>
                <h3>Яблоко</h3>
                <div className="price-top">
                  <span> 150 сом</span>120 сом
                </div>
                <div className="top-button translate">Смотреть</div>
              </div>
            </div>{" "}
            <div class="card_box card">
              <div class="span"></div>
              <img src={apple} alt="img" className="translate" width={180} />
              <div className="top-product-content">
                <h2>Доступно (на складе) </h2>
                <h3>Яблоко</h3>
                <div className="price-top">
                  <span> 150 сом</span>120 сом
                </div>
                <div className="top-button translate">Смотреть</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
