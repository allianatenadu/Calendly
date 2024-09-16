import React from "react";
import "/src/styles/main.scss";
import styles from "./Team.module.css";
import { Link } from "react-router-dom";

function Team() {
  return (
    <>
      <div className={styles.teamContainer}>
        <nav className="navbar navbar-light bg-white">
          <div className="container-fluid">
            <Link to="/" className={styles.navbarBrand}>
              <img
                src="https://png.pngtree.com/png-vector/20221013/ourmid/pngtree-calendar-icon-logo-2023-date-time-png-image_6310337.png"
                alt="Calendly"
                width="50"
                height="40"
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
                <Link className={`nav-link ${styles.navLink}`} to="/team">
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

        <div className="row">
          <div className="col-md-6">
            <h1 className={styles.textDark}>
              <span className={styles.textPrimary}>Power up </span>
              your <br /> team
            </h1>
            <p>
              Calendly gives control over team scheduling with a standardized,
              scalable process. It's secure, easy to manage, and integrates with
              your team's favorite tools, so you can get everyone working as
              efficiently as possible.
            </p>
            <button type="button" className={styles.btnPrimary}>
              Start for free
            </button>
            <button type="button" className={styles.btnOutlineDark}>
              Contact Sales
            </button>
          </div>
          <div className="col-md-6">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/4OgDbtJxqWFWJTqSWYTpfv/1747ec6e6c59c0de05a23a9c28bb4b44/Teams_Hero_Image_Small_io.png"
              width="500"
              height="350"
              alt="Team Power Up"
            />
          </div>
        </div>
        <div className="text-center">
          <h1 className={styles.textDark}>
            Streamline tasks, extend team <br /> reach
          </h1>
        </div>
        <div className={`row ${styles.location}`}>
          <div className="col-md-6">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/5FiHTjNtnKyRQ7hGxjCSr1/4bf1759ed8661788e8c5d42933f67c8c/Calendly-IT.png"
              width="450"
              height="300"
              alt="Automated Assignment"
            />
          </div>
          <div className="col-md-6">
            <p className={styles.textPrimary}>AUTOMATED ASSIGNMENT</p>
            <h3>Control how your team gets booked</h3>
            <p>
              With Calendly, you can offer sessions that are a few minutes or a
              few hours, for one invitee or a group. Automated round-robin,
              first-available, or geography-based assignments let you easily
              divvy up meetings in any way that works for your team members.
            </p>
          </div>
        </div>

        <div className={`text-center ${styles.location}`}>
          <p className={styles.textPrimary}>SOLUTIONS</p>
          <h1>The right Calendly for the work you do</h1>
        </div>

        <div className="row row-cols-1 row-cols-md-4 g-3">
          <div className="col">
            <div className={`card ${styles.cardShadow} mb-5 bg-body rounded`}>
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/2kiAGfjL7zawukKEtUekPZ/e9808f922920947d64e0ffe4fbf18a45/Calendly-Individuals-Hero.png?q=85&fm=webp"
                className="card-img-top"
                height="180"
                alt="Sales"
              />
              <div className={`card-body ${styles.cardBody}`}>
                <h5 className={styles.cardTitle}>Sales</h5>
                <p className={styles.cardText}>Get your best leads faster</p>
                <a href="your_link_here" className={styles.cardLink}>
                  Learn more <span style={{ fontSize: "larger" }}>&gt;</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card ${styles.cardShadow} mb-5 bg-body rounded`}>
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/17K0lFIafYVanv5goumK7h/7bc0a909e218c584272f79792bd00ca1/Calendly-Education.png"
                className="card-img-top"
                height="180"
                alt="Recruiting"
              />
              <div className={`card-body ${styles.cardBody}`}>
                <h5 className={styles.cardTitle}>Recruiting</h5>
                <p className={styles.cardText}>Less emailing, more closing</p>
                <a href="your_link_here" className={styles.cardLink}>
                  Learn more <span style={{ fontSize: "larger" }}>&gt;</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card ${styles.cardShadow} mb-5 bg-body rounded`}>
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/1sYMnXo7fW0NnGC01IWbi5/b16e3fa2e9cfc91fc44981ba549db69f/Enterpise.png"
                className="card-img-top"
                height="180"
                alt="Customer Service"
              />
              <div className={`card-body ${styles.cardBody}`}>
                <h5 className={styles.cardTitle}>Customer Service</h5>
                <p className={styles.cardText}>
                  Connect with customers when it matters
                </p>
                <a href="your_link_here" className={styles.cardLink}>
                  Learn more <span style={{ fontSize: "larger" }}>&gt;</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card ${styles.cardShadow} mb-5 bg-body rounded`}>
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/5guPpyRmwJuVAnOcDKHWqx/598c6209ebe0df0e5bc2d7b18a982781/Calendly-Sales-new.png?q=85&fm=webp"
                className="card-img-top"
                height="203"
                alt="Education"
              />
              <div className={`card-body ${styles.cardBody}`}>
                <h5 className={styles.cardTitle}>Education</h5>
                <p className={styles.cardText}>Boost students success</p>
                <a href="your_link_here" className={styles.cardLink}>
                  Learn more <span style={{ fontSize: "larger" }}>&gt;</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`row ${styles.location}`}>
          <div className="col-md-4">
            <h4 className={styles.textDark}>
              Easy <span className={styles.textPrimary}>ahead</span>
            </h4>
            <p>
              We take the work out of connecting with others so you can
              accomplish more.
            </p>
            <select
              className={styles.selectStyle}
              aria-label="Default select example"
            >
              <option selected>English</option>
              <option value="1">French</option>
              <option value="2">Spanish</option>
            </select>
          </div>
          <div className="col-md-2">
            <h6 className={styles.textDark}>About</h6>
            <p>
              About Calendly <br /> Contact Sales <br /> Newsroom <br /> Careers{" "}
              <br /> Security
            </p>
          </div>
          <div className="col-md-2">
            <h6 className={styles.textDark}>Solutions</h6>
            <p>
              Customer <br /> Sales <br /> Recruiting <br /> Education <br />{" "}
              Marketing
            </p>
          </div>
          <div className="col-md-4">
            <h6 className={styles.textDark}>People Features</h6>
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

export default Team;
