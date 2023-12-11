import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Skill = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="skill-section" id="Skill">
      <div className="container">
        <h2 className="h1 skill">My Technical Skills and Expertise</h2>
        <div className="skillsContainer">
          <div className="skill--scroll">
            <div className="">
              <div className="">
                <Slider {...settings}>
                  <div className="skill--box" key={1}>
                    <img src="img/skills/html.svg" alt="HTML" />
                    <h3 className="skill-name">HTML</h3>
                  </div>

                  <div className="skill--box" key={2}>
                    <img src="img/skills/css.svg" alt="CSS" />
                    <h3 className="skill-name">CSS</h3>
                  </div>
                  <div className="skill--box" key={3}>
                    <img src="img/skills/bootstrap.svg" alt="Javascript" />
                    <h3 className="skill-name">Bootstrap</h3>
                  </div>
                  <div className="skill--box" key={4}>
                    <img src="img/skills/tailwind.svg" alt="Javascript" />
                    <h3 className="skill-name">Tailwind</h3>
                  </div>
                  <div className="skill--box" key={5}>
                    <img src="img/skills/javascript.svg" alt="Javascript" />
                    <h3 className="skill-name">Javascript</h3>
                  </div>
                  <div className="skill--box" key={6}>
                    <img src="img/skills/typescript.svg" alt="Javascript" />
                    <h3 className="skill-name">Typescript</h3>
                  </div>
                  <div className="skill--box" key={7}>
                    <img src="img/skills/react.svg" alt="React" />
                    <h3 className="skill-name">React</h3>
                  </div>
                  <div className="skill--box" key={8}>
                    <img src="img/skills/csharp.svg" alt="Python" />
                    <h3 className="skill-name">C#</h3>
                  </div>
                  <div className="skill--box" key={9}>
                    <img src="img/skills/mongoDB.svg" alt="MongoDB" />
                    <h3 className="skill-name">MongoDB</h3>
                  </div>
                  <div className="skill--box" key={10}>
                    <img src="img/skills/mysql.svg" alt="MySQL" />
                    <h3 className="skill-name">MySQL</h3>
                  </div>
                  <div className="skill--box" key={11}>
                    <img src="img/skills/sqlite.svg" alt="MySQL" />
                    <h3 className="skill-name">Sqlite</h3>
                  </div>
                  {/* <div className="skill--box">
                    <img src="img/skills/postgresql.svg" alt="MySQL" />
                    <h3 className="skill-name">Postgresql</h3>
                  </div> */}
                  <div className="skill--box" key={12}>
                    <img src="img/skills/python.svg" alt="Python" />
                    <h3 className="skill-name">Python</h3>
                  </div>

                  <div className="skill--box" key={13}>
                    <img src="img/skills/git.svg" alt="Python" />
                    <h3 className="skill-name">Git</h3>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
