import React from "react";
import "/src/styles/main.scss";
import styles from "./Home.module.css"; // Import CSS Module

function Home() {
  return (
    <>
      <div className={styles.homeContainer}>
        <nav className="navbar navbar-light bg-white">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="https://png.pngtree.com/png-vector/20221013/ourmid/pngtree-calendar-icon-logo-2023-date-time-png-image_6310337.png"
                alt=""
                width="50"
                height="40"
                className="d-inline-block align-text-top rounded-circle"
              />
              <span>Calendly</span>
            </a>

            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/individuals">
                  Individuals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/team">
                  Teams
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/enterprise">
                  Enterprise
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="row">
          <div className="col-md-6">
            <h1 className="text-dark">
              Easy <br /> scheduling <br />
              <span className="text-primary">ahead</span>
            </h1>
            <p>
              Calendly is your hub for scheduling meetings professionally and
              efficiently, eliminating the hassle of back-and-forth emails so
              you can get back to work.
            </p>
            <label className="visually-hidden" htmlFor="autoSizingInputGroup">
              Email
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control rounded-pill"
                id="autoSizingInputGroup"
                placeholder="Enter your email"
              />
              <button type="button" className="btn btn-dark rounded-pill">
                Sign up
              </button>
            </div>
            <p className="fw-light">
              Create your free account. No credit card required.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://png.pngtree.com/png-clipart/20220602/original/pngtree-sad-woman-working-laptop-png-image_7874723.png"
              width="500"
              height="400"
              alt="Work"
            />
          </div>
        </div>

        <div className="p-3 mb-2 bg-light text-dark">
          <h5 className="fw-bold text-center">
            Simplified scheduling for more than
          </h5>
          <h5 className="fw-bold text-center">
            <span className="text-info">10,000,000</span> users worldwide
          </h5>
          <div className="text-center">
            <img
              src="https://www.compass.com/ucfe-assets/about/about-v3.6.4/newsroom/share_image.png"
              width="70"
              height="40"
              alt="Company Logo"
            />
            <img
              src="https://www.thembsgroup.co.uk/wp-content/uploads/2023/03/Ebay-logo.png"
              width="70"
              height="50"
              alt="Ebay Logo"
            />
            <img
              src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032011/lazboy_logo_col.png"
              width="70"
              height="50"
              alt="Lazboy Logo"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLR1-ZjY_scU8JlECIAXlMfTJiCzwjk3LL4fFE0A2olQ&s"
              width="70"
              height="50"
              alt="Company Logo"
            />
          </div>
        </div>

        <div className="row location">
          <div className="col-md-2"></div>
          <div className="col-md-3 border-start">
            <button type="button" className="btn btn-primary rounded-circle">
              1
            </button>
            <h5>Create simple rules</h5>
            <p>
              Let Calendly know your availability preferences and it'll do the
              work for you.
            </p>
          </div>
          <div className="col-md-3 border-start">
            <button type="button" className="btn btn-primary rounded-circle">
              2
            </button>
            <h5>Share your link</h5>
            <p>Send guests your Calendly link or embed it on your website.</p>
          </div>
          <div className="col-md-3 border-start">
            <button type="button" className="btn btn-primary rounded-circle">
              3
            </button>
            <h5>Get booked</h5>
            <p>They pick a time and the event is added to your calendar.</p>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
