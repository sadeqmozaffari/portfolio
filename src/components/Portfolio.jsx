import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Portfolio = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settingsSecond = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="section-portfolio" id="Portfolio">
      <div className="container">
        <h2 className="h1 skill">My Porfolio</h2>
        <p className="hero-des text-center">
          In my portfolio, I aim to showcase my skills and experiences in a way
          that reflects my commitment to excellence. I have a genuine passion
          for continuous learning and improvement, always seeking ways to
          enhance both myself and the projects I engage in. My ultimate goal is
          to apply my knowledge and expertise to create solutions that have a
          positive impact on the world around us. It's worth noting that the
          projects listed here, which I developed as a freelancer, have been
          added since the end of 2022.
        </p>
        <div className="portfolio-grid">
          <Slider {...settings}>
            <div className="protfolio-item" key={1}>
              <div className="portfolio-img">
                <img
                  src="./img/bashi.jpg"
                  className=""
                  loading="lazy"
                  alt="Sadeq Mozaffari portfolio"
                />
              </div>
              <div className="portfolio-info pt-3">
                <h3 className="h3">Bashi Inovations</h3>
                <h3 className="h3 accent">Language and tools:</h3>
                <ul className="service-list info-portfolio-item">
                  <li className="service-list-item">HTML, CSS, Bootstrap</li>
                  <li className="service-list-item">Dynamic Data</li>
                  <li className="service-list-item">
                    Asp.net core (Identity, AdminPanel)
                  </li>
                </ul>
                <a
                  href="http://bashi.af/"
                  className="btn btn-primary btn-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview
                </a>
              </div>
            </div>
            <div className="protfolio-item" key={2}>
              <div className="portfolio-img">
                <img
                  src="./img/azi.jpg"
                  className=""
                  loading="lazy"
                  alt="Sadeq Mozaffari portfolio"
                />
              </div>
              <div className="portfolio-info pt-3">
                <h3 className="h3">Akramzada International Network</h3>
                <h3 className="h3 accent">Language and tools:</h3>
                <ul className="service-list info-portfolio-item">
                  <li className="service-list-item">HTML, CSS, Bootstrap</li>
                  <li className="service-list-item">
                    Dynamic Data & English and Dari Language
                  </li>
                  <li className="service-list-item">
                    Asp.net core (Identity, AdminPanel)
                  </li>
                </ul>
                <a
                  href="https://azi.af/"
                  className="btn btn-primary btn-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview
                </a>
              </div>
            </div>
            <div className="protfolio-item" key={3}>
              <div className="portfolio-img">
                <img
                  src="./img/crystal.jpg"
                  className=""
                  loading="lazy"
                  alt="Sadeq Mozaffari portfolio"
                />
              </div>
              <div className="portfolio-info pt-3">
                <h3 className="h3">Crystal Bayat Foundation</h3>
                <h3 className="h3 accent">Language and tools:</h3>
                <ul className="service-list info-portfolio-item">
                  <li className="service-list-item">HTML, CSS, Bootstrap</li>
                  <li className="service-list-item">
                    Reactjs(Redux-toolkit,Redux-query)
                  </li>
                  <li className="service-list-item">
                    Asp.net core (API,Identity,JWT,Donation)
                  </li>
                </ul>
                <a
                  href="https://crystalbayat.org/"
                  className="btn btn-primary btn-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview
                </a>
              </div>
            </div>

            <div className="protfolio-item" key={4}>
              <div className="portfolio-img">
                <img
                  src="./img/kawsar.png"
                  className=""
                  loading="lazy"
                  alt="Sadeq Mozaffari portfolio"
                />
              </div>
              <div className="portfolio-info">
                <h3 className="h3">Kawsar Company </h3>
                <h3 className="h3 accent">Language and tools:</h3>
                <ul className="service-list info-portfolio-item">
                  <li className="service-list-item">HTML, CSS, JavaScript</li>
                  <li className="service-list-item">WordPress</li>
                  <li className="service-list-item">
                    English and Dari Language
                  </li>
                </ul>
                <a
                  href="https://kawsarplastic.com/"
                  className="btn btn-primary btn-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview
                </a>
              </div>
            </div>
            <div className="protfolio-item" key={4}>
              <div className="portfolio-img">
                <img
                  src="./img/kabul.jpg"
                  className=""
                  loading="lazy"
                  alt="Sadeq Mozaffari portfolio"
                />
              </div>
              <div className="portfolio-info">
                <h3 className="h3">Kabul Royal </h3>
                <h3 className="h3 accent">Language and tools:</h3>
                <ul className="service-list info-portfolio-item">
                  <li className="service-list-item">HTML, CSS, JavaScript</li>
                  <li className="service-list-item">WordPress</li>
                  <li className="service-list-item">.</li>
                </ul>
                <a
                  href="https://kabulroyal.com/"
                  className="btn btn-primary btn-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview
                </a>
              </div>
            </div>
          </Slider>
        </div>
        <div className="">
          <Slider {...settingsSecond}>
            <div className="protfolio-item" key={6}>
              <div className="portfolio-img">
                <img
                  src="./img/target.jpg"
                  className=""
                  loading="lazy"
                  alt="Sadeq Mozaffari portfolio"
                />
              </div>
              <div className="portfolio-info">
                <h3 className="h3">Website for Educational Consulty</h3>
                <h3 className="h3 accent">Language and tools:</h3>
                <ul className="service-list info-portfolio-item">
                  <li className="service-list-item">HTML, CSS, JavaScript</li>
                  <li className="service-list-item">WordPress</li>
                </ul>
                <a href="/" className="btn btn-primary btn-portfolio">
                  Preview
                </a>
              </div>
            </div>
            <div className="protfolio-item" key={5}>
              <div className="portfolio-img">
                <img
                  src="./img/system.jpg"
                  className=""
                  loading="lazy"
                  alt="Sadeq Mozaffari portfolio"
                />
              </div>
              <div className="portfolio-info">
                <h3 className="h3">Hospital & Stock Management System</h3>
                <h3 className="h3 accent">Language and tools:</h3>
                <ul className="service-list info-portfolio-item">
                  <li className="service-list-item">
                    HTML, CSS, JavaScript, Ajax, Bootstrap
                  </li>
                  <li className="service-list-item">Asp.net core</li>
                </ul>
                <a href="/" className="btn btn-primary btn-portfolio">
                  Preview
                </a>
              </div>
            </div>
            <div className="protfolio-item" key={1}>
              <div className="portfolio-img">
                <img
                  src="./img/AdminPanel.jpg"
                  className=""
                  loading="lazy"
                  alt="Sadeq Mozaffari portfolio"
                />
              </div>
              <div className="portfolio-info">
                <h3 className="h3">AdminPanel</h3>
                <h3 className="h3 accent">Language and tools:</h3>
                <ul className="service-list info-portfolio-item">
                  <li className="service-list-item">HTML, CSS, JavaScript</li>
                  <li className="service-list-item">ReactJs</li>
                </ul>
                <a
                  href="https://github.com/sadeqmozaffari/Admin-Panel-LTR"
                  className="btn btn-primary btn-portfolio"
                >
                  Source
                </a>
              </div>
            </div>

            <div className="protfolio-item" key={4}>
              <div className="portfolio-img">
                <img
                  src="./img/afghanaid.jpg"
                  className=""
                  loading="lazy"
                  alt="Sadeq Mozaffari portfolio"
                />
              </div>
              <div className="portfolio-info">
                <h3 className="h3">Website of charity organization </h3>
                <h3 className="h3 accent">Language and tools:</h3>
                <ul className="service-list info-portfolio-item">
                  <li className="service-list-item">HTML, CSS, JavaScript</li>
                  <li className="service-list-item">WordPress</li>
                </ul>
                <a href="/" className="btn btn-primary btn-portfolio">
                  Preview
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
