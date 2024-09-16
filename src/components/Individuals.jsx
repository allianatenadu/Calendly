import React from "react";
import styles from "./Individuals.module.css"; // Import the CSS module
import "/src/styles/main.scss";

function Individuals() {
  return (
    <>
      <div className={styles.container}>
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

        <div className={styles.location}>
          <div className="row">
            <div className="col-md-6">
              <h3 className="text-dark">
                The genius way to <br /> work{" "}
                <span className="text-primary">better</span>
              </h3>
              <p>
                Calendly makes it easy to work smarter when you're working solo.
                Meetings, sessions, and appointments become more efficient ways
                to achieve success and accomplish goals.
              </p>
              <button type="button" className="btn btn-dark rounded-pill">
                Sign up for free
              </button>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.salesforceben.com/wp-content/uploads/2022/01/Screenshot-2022-01-23-at-19.27.52.png"
                width="400"
                height="300"
                alt="Work"
              />
            </div>
          </div>
        </div>

        <div className={styles.location1}>
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/66m8r2eQ4wqmDwqwww1ZAU/e74a894a892a284043e12846d166a231/Calendly-Demand-Gen.png"
                width="400"
                height="300"
                alt="Calendar"
              />
            </div>
            <div className="col-md-6">
              <p className="text-muted">A CURATED CALENDAR</p>
              <h4 className="text-dark">Book up efficiently</h4>
              <p>
                When invitees select a meeting slot from your schedule, they
                only see the times you're available, and only the length and
                type of meeting you want to have. Your schedule fills up
                efficiently, and everyone avoids excess email exchanges.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.location1}>
          <div className="row">
            <div className="col-md-6">
              <p className="text-muted">AUTOMATED NOTIFICATIONS & FOLLOW-UPS</p>
              <h4>Work like you have a personal assistant</h4>
              <p>
                Because Calendly automates administrative tasks like sending
                reminder emails and follow-ups, you can focus on the work but
                build your business and bring customers back for more.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/6tvfCn8IijfbV70XhsKh0o/1ee63bcf6f7a0071018821453e0c0dd5/Calendly-Recruiting.png"
                width="400"
                height="300"
                alt="Recruiting"
              />
            </div>
          </div>
        </div>

        <div className={styles.easy}>
          <h1 className={styles.text}>
            Find just-right plans <br /> for individuals and <br /> small teams
            <br />
            <button type="button" className="btn btn-dark rounded-pill">
              See our plans
            </button>
          </h1>
        </div>

        <div className={styles.location2}>
          <div className="row">
            <div className="col-md-4">
              <h4 className="text-dark">
                Easy <span className="text-primary">ahead</span>
              </h4>
              <p>
                We take the work out of connecting with others so you can
                accomplish more.
              </p>
              <select
                className="form-select"
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
                About Calendly <br /> Contact Sales <br /> Newsroom <br />{" "}
                Careers <br /> Security
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
      </div>
    </>
  );
}

export default Individuals;
