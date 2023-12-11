import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [SuccessMessage, setSuccessMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    message === "" || name === "" || email === ""
      ? setError(true)
      : emailjs
          .sendForm(
            "service_ic1qsnj",
            "template_hpql8oj",
            form.current,
            "1k_xA0_lOVOO6uHC6"
          )
          .then(
            (result) => {
              setSuccessMessage("Your Email Send Successfuly");
              e.target.reset();
              setError(false);
              setEmail("");
              setMessage("");
              setName("");
            },
            (error) => {
              console.log(error.text);
            }
          );
  };
  return (
    <section className="contact-section" id="Contact">
      <h2 className="h1 text-center">Contact Me</h2>
      <div className="container contact-se">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-section">
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Name:
              </label>
              <input
                className="form-control"
                placeholder=""
                id="name"
                type="text"
                name="from_name"
                onChange={(e) => {
                  setName(e.target.value);
                  if (message !== "" && name !== "" && email !== "") {
                    setError(false);
                  }
                }}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                name="to_name"
                className="form-control"
                placeholder=""
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (message !== "" && name !== "" && email !== "") {
                    setError(false);
                  }
                }}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                placeholder=""
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (message !== "" && name !== "" && email !== "") {
                    setError(false);
                  }
                }}
              ></textarea>
            </div>
            {error && (
              <div className="message danger-text">please fill the form</div>
            )}
            <div className="submit">
              <button type="submit" value="Send" className="btn btn-primary ">
                submit
              </button>
            </div>
          </div>
          {SuccessMessage !== "" && (
            <div className="message info-text">{SuccessMessage}</div>
          )}
        </form>
        <div className="info">
          <div className="info-item">
            <span className="info-icon">
              <ion-icon name="at-outline"></ion-icon>
            </span>
            <p className="info-text">
              <a href="mailto:sadeqmozaffari@gmail.com">
                sadeqmozaffari@gmail.com
              </a>
            </p>
          </div>

          <div className="info-item">
            <span className="info-icon">
              <ion-icon name="call-outline"></ion-icon>
            </span>
            <p className="info-text">+93 79 49 54 086</p>
          </div>

          <div className="info-item">
            <span className="info-icon">
              <ion-icon name="location-outline"></ion-icon>
            </span>
            <p className="info-text">Kabul, Afghanistan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
