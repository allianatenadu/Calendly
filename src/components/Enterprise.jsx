import React from "react";
import { Link } from "react-router-dom";
import styles from "../components/Enterprise.module.css"; // Importing SCSS module
import "/src/styles/main.scss"; // Global SCSS (Bootstrap, etc.)

function Enterprise() {
  return (
    <>
      <div className={styles.enterpriseContainer}>
        <nav className="navbar navbar-light bg-white">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              <img
                src="https://png.pngtree.com/png-vector/20221013/ourmid/pngtree-calendar-icon-logo-2023-date-time-png-image_6310337.png"
                alt="Calendly"
                width="50"
                height="40"
                className="d-inline-block align-text-top rounded-circle"
              />
              <span>Calendly</span>
            </Link>

            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link
                  className={`nav-link ${styles.navLink}`}
                  to="/individuals"
                >
                  Individuals
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.navLink}`} to="/teams">
                  Teams
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.navLink}`} to="/enterprise">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <h1 className="text-center">
          <span className={styles.textPrimary}>Way more</span> than <br /> a
          scheduling link
        </h1>
        <h4 className="text-center">
          Standardize on the #1 scheduling platform and <br /> deliver the power
          of Calendly across your entire <br /> organization.
        </h4>
        <div className="text-center">
          <button
            type="button"
            className={`btn ${styles.btnPrimary} rounded-pill`}
          >
            Contact Sales
          </button>
        </div>

        <div className={styles.easy}>
          <h3 className="text-center text-white">
            Trusted by more than 50,000 of the world's leading organizations
          </h3>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.cards}>
            <h6 className={`${styles.textPrimary} ${styles.content}`}>Sales</h6>
            <div className="text-center">
              <img
                src="https://img.freepik.com/premium-vector/autumn-sale-round-wavy-edge-2d-linear-cartoon-marketing-sticker-hanging-circle-isolated-line-vector-price-badge-white-background-selling-color-flat-spot-illustration-advertising-commercial-event_151150-19180.jpg"
                width="120"
                height="100"
                alt="Sales"
              />
            </div>
            <p className={styles.content}>
              Convert more leads and prospects into meetings and revenue. Easily
              book demos and customer calls without the back and forth.
            </p>
          </div>
          <div className={styles.cards}>
            <h6 className={`${styles.textPrimary} ${styles.content}`}>
              Customer Success
            </h6>
            <div className="text-center">
              <img
                src="https://previews.123rf.com/images/tanyastock/tanyastock1509/tanyastock150901856/45500529-computer-pc-icon-widescreen-display-sign-blue-flat-circle-button-with-shadow-vector.jpg"
                width="120"
                height="100"
                alt="Customer Success"
              />
            </div>
            <p className={styles.content}>
              Deliver better support interactions and customer consultations.
              Stay connected with automated reminders and follow-ups.
            </p>
          </div>
          <div className={styles.cards}>
            <h6 className={`${styles.textPrimary} ${styles.content}`}>
              Recruiting
            </h6>
            <div className="text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6OdYkAtd0D9O87YZsWg99HZTr1IwO_OhH5cSRuIXguQ&s"
                width="120"
                height="100"
                alt="Recruiting"
              />
            </div>
            <p className={styles.content}>
              Fill your candidate pipeline and book more interviews and
              recruiter screens with easy, standardized scheduling.
            </p>
          </div>
        </div>

        <div className="text-center" id={styles.but}>
          <button type="button" className="btn btn-dark rounded-pill">
            Learn more
          </button>
        </div>

        <div className="row location">
          <div className="col-md-4">
            <h4 className="text-dark">
              Easy <span className={styles.textPrimary}>ahead</span>
            </h4>
            <p>
              We take the work out of connecting with others so you can
              accomplish more.
            </p>
            <select
              className={`form-select ${styles.selectStyle}`}
              aria-label="Default select example"
            >
              <option selected>English</option>
              <option value="1">French</option>
              <option value="2">Spanish</option>
            </select>
          </div>
          <div className="col-md-2">
            <h6 className="text-dark">About</h6>
            <p>
              About Calendly <br /> Contact Sales <br /> Newsroom <br /> Careers{" "}
              <br /> Security
            </p>
          </div>
          <div className="col-md-2">
            <h6 className="text-dark">Solutions</h6>
            <p>
              Customer <br /> Sales <br /> Recruiting <br /> Education <br />{" "}
              Marketing
            </p>
          </div>
          <div className="col-md-4">
            <h6 className="text-dark">People Features</h6>
            <p>
              Embed Calendly <br /> Availability <br /> Sending Notifications{" "}
              <br /> Using Calendly Mobile
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Enterprise;
