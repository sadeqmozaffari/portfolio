import React from "react";
import ReactTyped from "react-typed";
import pdf from "../assets/sadeqcv.pdf";
const HeroSection = () => {
  return (
    <section className="hero-section" id="About">
      <div className="container">
        <div className="hero-items">
          <div className="hero-img-div">
            <img src="img/sadeq.jpg" alt="sadeq mozaffari" />
          </div>
          <div className="hero-info">
            <h1 className="h1">
              Hi, I'm <span className="hero-name">Sadeq Mozaffari</span>
            </h1>

            <h2 className="h1">
              <span className="auto-type">
                <ReactTyped
                  strings={["Software Developer", "Full Stack Developer"]}
                  typeSpeed={100}
                  loop
                />
              </span>
            </h2>
            <p className="hero-des">
              I am a seasoned Full Stack Developer with over 4 years of
              experience crafting immersive web experiences. I have a proven
              track record of successfully developing and deploying a diverse
              range of projects, including a Hospital Management System, Bashi
              Innovations website, and various others. These projects have not
              only showcased my technical prowess but also delivered tangible
              benefits such as improved efficiency and user satisfaction.
            </p>
          </div>
        </div>
        <div className="hero-items">
          <div className="hero-info">
            <p className="hero-des">
              My passion lies in translating complex ideas into seamless digital
              solutions. I specialize in harnessing the power of HTML5, CSS3,
              JavaScript, React.js, jQuery, AJAX, Tailwind CSS, and Bootstrap to
              build not just websites but interactive and performance-optimized
              experiences. On the backend, I am proficient in Asp.net Core,
              ensuring a robust and efficient foundation for the applications I
              develop.<br/> What sets me apart is my dedication to innovation. I
              constantly seek to stay ahead in the dynamic web development
              landscape, recently incorporating Next.js and React.js into my
              toolkit. This commitment to staying at the forefront allows me to
              create innovative solutions that make the web more accessible and
              enjoyable for everyone.
            </p>

            <div className="btn-group mt-20  mb-40">
              <a
                href={pdf}
                download="FileName.pdf"
                className="btn-hero-section"
              >
                Resume
              </a>
              <a className="btn-hero-section" href="#Contact">
                Contact Me
              </a>
            </div>

            <div className="social mt-20 des-icons">
              <a
                className="social-github social-icon"
                href="https://github.com/sadeqmozaffari"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a
                className="social-twitter social-icon"
                href="https://twitter.com/SadeqMozaffari"
              >
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a
                className="social-linkedin social-icon"
                href="https://www.linkedin.com/in/sadeqmozaffari/"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="social mt-20 mobile-icons">
        <a
          className="social-github social-icon"
          href="https://github.com/sadeqmozaffari"
        >
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a
          className="social-twitter social-icon"
          href="https://twitter.com/SadeqMozaffari"
        >
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
        <a
          className="social-linkedin social-icon"
          href="https://www.linkedin.com/in/sadeq-mozaffari/"
        >
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
