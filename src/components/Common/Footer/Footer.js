import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <section className="footer">
        <footer className="text-center">
          <div className="container p-4 pb-0">
            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Register for free</span>
                <Link to="signup">
                <button type="button" className="btn btn-outline-light btn-rounded">
                  Sign up!
                </button>
                </Link>
              </p>
            </section>
          </div>

          <div className="text-center p-3 footer_down">
            © 2020 Copyright:
            <Link to="https://mdbootstrap.com/"  className="text-white">
              MDBootstrap.com
            </Link>
          </div>
        </footer>
      </section>
    </div>
  );
};
export default Footer;
