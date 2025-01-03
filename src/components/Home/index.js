import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Gallery from "./Gallery";
import useAuthentication from "../../lib/hooks/useAuthentication";

const Deals = () => (
  <section className="padding-bottom mt-5">
    <div className="card card-deal">
      <div className="col-heading content-body">
        <header className="section-heading">
          <h3 className="section-title">Catalogue D'hiver</h3>
          <p>Bougies Parfumées</p>
        </header>
        <div className="timer">
          <div>
            {" "}
            <span className="num">21</span> <small>Days</small>
          </div>
          <div>
            {" "}
            <span className="num">12</span> <small>Hours</small>
          </div>
          <div>
            {" "}
            <span className="num">58</span> <small>Min</small>
          </div>
          <div>
            {" "}
            <span className="num">02</span> <small>Sec</small>
          </div>
        </div>
      </div>
      <div className="row no-gutters items-wrap">
        <div className="col-md col-6">
          <figure className="card-product-grid card-sm">
            <a href="#" className="img-wrap">
              <img src={process.env.PUBLIC_URL + "images/items/3.jpg"} />
            </a>
            <div className="text-wrap p-3">
              <a href="#" className="title">
                Une douce chaleur hivernale.
              </a>
              <span className="badge badge-danger"> -20% </span>
            </div>
          </figure>
        </div>
        <div className="col-md col-6">
          <figure className="card-product-grid card-sm">
            <a href="#" className="img-wrap">
              <img src={process.env.PUBLIC_URL + "images/items/4.jpg"} />
            </a>
            <div className="text-wrap p-3">
              <a href="#" className="title">
                Une atmosphère accueillante.
              </a>
              <span className="badge badge-danger"> -5% </span>
            </div>
          </figure>
        </div>
        <div className="col-md col-6">
          <figure className="card-product-grid card-sm">
            <a href="#" className="img-wrap">
              <img src={process.env.PUBLIC_URL + "images/items/5.jpg"} />
            </a>
            <div className="text-wrap p-3">
              <a href="#" className="title">
                Saison d'hiver.
              </a>
              <span className="badge badge-danger"> -20% </span>
            </div>
          </figure>
        </div>
        <div className="col-md col-6">
          <figure className="card-product-grid card-sm">
            <a href="#" className="img-wrap">
              <img src={process.env.PUBLIC_URL + "images/items/6.jpg"} />
            </a>
            <div className="text-wrap p-3">
              <a href="#" className="title">
                Enveloppez votre chez-vous.
              </a>
              <span className="badge badge-danger"> -15% </span>
            </div>
          </figure>
        </div>
        <div className="col-md col-6">
          <figure className="card-product-grid card-sm">
            <a href="#" className="img-wrap">
              <img src={process.env.PUBLIC_URL + "images/items/7.jpg"} />
            </a>
            <div className="text-wrap p-3">
              <a href="#" className="title text-truncate">
                Une touche chaleureuse.
              </a>
              <span className="badge badge-danger"> -10% </span>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </section>
);

const Slider = () => (
  <div
    id="carousel1_indicator"
    className="slider-home-banner carousel slide mt-3"
    data-ride="carousel"
  >
    <ol className="carousel-indicators">
      <li
        data-target="#carousel1_indicator"
        data-slide-to="0"
        className="active"
      ></li>
      <li data-target="#carousel1_indicator" data-slide-to="1"></li>
      <li data-target="#carousel1_indicator" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="images/banners/slide1.jpg" alt="First slide" />
      </div>
      <div className="carousel-item">
        <img src="images/banners/slide2.jpg" alt="Second slide" />
      </div>
      <div className="carousel-item">
        <img src="images/banners/slide3.jpg" alt="Third slide" />
      </div>
    </div>
    <a
      className="carousel-control-prev"
      href="#carousel1_indicator"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carousel1_indicator"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
);

const Home = () => {
  const dispatch = useDispatch();
  const { handleAuthentication } = useAuthentication(dispatch);

  useEffect(() => {
    handleAuthentication();
  }, []);
  return (
    <div className="container" style={{ marginTop: "130px" }}>
      <Slider />
      <Deals />
      <Gallery />
    </div>
  );
};
export default Home;
