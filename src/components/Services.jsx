import React from "react";

const Services = () => {
  return (
    <section className="service-section" id="Services">
      <div className="container">
        <h2 className="h1 services">Services</h2>
        <p className="hero-des text-center">
          Elevate your online presence with our essential web development
          services. In today's digital era, a well-designed and functional
          website is paramount for engaging customers. I provide a comprehensive
          range of services tailored to meet the unique needs and goals of your
          business. Our skilled web developers collaborate closely with you to
          understand your brand identity and objectives, ensuring the final
          product aligns perfectly with your vision. Contact me today to
          discover how our web development services can enhance your online
          presence and drive success for your business!
        </p>
        <div className="service-section-items">
          <div className="service-item">
            <img
              className="service-img"
              src="./img/design.png"
              alt="web design"
            />
            <h2 className="h2 service-title">Web Design</h2>

            <ul className="service-list">
              <li className="service-list-item">
                Creating user interfaces that are visually appealing and
                intuitive to use.
              </li>
              <li className="service-list-item">
                Writing code that is easy to read, understand, and maintain.
              </li>
              <li className="service-list-item">
                Understanding the principles of responsive design for optimal
                viewing on different devices.
              </li>
              <li className="service-list-item">
                Testing websites for compatibility across different browsers and
                platforms.
              </li>
            </ul>
          </div>
          <div className="service-item">
            <img
              className="service-img"
              src="./img/backend.png"
              alt="backend"
            />
            <h2 className="h2 service-title">Backend Development</h2>

            <ul className="service-list">
              <li className="service-list-item">
                Developing server side applications using programming languages
                such as Python, Asp.net Core etc..
              </li>
              <li className="service-list-item">
                Creating APIs for communication between the frontend and backend
                of a web application or mobile app.
              </li>
              <li className="service-list-item">
                Implementing security measures such as authentication and
                authorization protocols for user access control.
              </li>
              <li className="service-list-item">
                Optimizing applications for performance by caching data or
                utilizing other techniques such as load balancing or sharding
                databases etc.
              </li>
            </ul>
          </div>
          <div className="service-item">
            <img className="service-img" src="./img/dbms.png" alt="dbms" />
            <h2 className="h2 service-title">Database Design</h2>

            <ul className="service-list">
              <li className="service-list-item">
                Designing databases that are efficient, secure, and scalable.
              </li>
              <li className="service-list-item">
                Utilizing SQL or NoSQL databases to store data in an organized
                manner.
              </li>
              <li className="service-list-item">
                Creating database schemas that adhere to normalization rules for
                data integrity.
              </li>
              <li className="service-list-item">
                Writing queries to retrieve data from the database quickly and
                accurately.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
