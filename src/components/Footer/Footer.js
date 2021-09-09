import React from 'react'
import a from '../../assets/img/logo.jpg'
import b from '../../assets/img/icons/social/instagram.svg'
import c from '../../assets/img/icons/social/facebook.svg'
import d from '../../assets/img/icons/social/twitter.svg'
import e from '../../assets/img/icons/social/pinterest.svg'

const Footer = () => {
  return (
    <footer className="py-8 py-md-11 bg-gray-200 pt-100 pb-70 footer pt-xs-40">
      <div className="container">
        <div className="row pl-50 pr-50">
          <div className="col-12 col-md-4 col-lg-3">
            {/* Logo */}
            <img src={a} alt="..." className="footer-brand img-fluid mb-2 p-10" />

            <p className="text-gray-700 mb-2">
              AI Powered Scheduling & Estimating Software
            </p>

            <ul className="list-unstyled list-inline list-social mb-6 mb-md-0 pb-40">
              <li className="list-inline-item list-social-item me-3">
                <a href="#!" className="text-decoration-none">
                  <img src={b} className="list-social-icon" alt="..." />
                </a>
              </li>
              <li className="list-inline-item list-social-item me-3">
                <a href="#!" className="text-decoration-none">
                  <img src={c} className="list-social-icon" alt="..." />
                </a>
              </li>
              <li className="list-inline-item list-social-item me-3">
                <a href="#!" className="text-decoration-none">
                  <img src={d} className="list-social-icon" alt="..." />
                </a>
              </li>
              <li className="list-inline-item list-social-item">
                <a href="#!" className="text-decoration-none">
                  <img src={e} className="list-social-icon" alt="..." />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="fw-bold title text-uppercase text-gray-700">Products</h6>

            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Scheduling
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Estimation
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Visual Editing
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Costs Alerts
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="fw-bold title text-uppercase text-gray-700">Partners</h6>

            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Program
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  System Integrators
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Technology
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
            <h6 className="fw-bold title text-uppercase text-gray-700">Solutions</h6>

            <ul className="list-unstyled text-muted mb-0">
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Residential
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Commercial
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Industrial
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Transportation
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Public Sector
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Union
                </a>
              </li>
              <li>
                <a href="#!" className="text-reset">
                  Renovation
                </a>
              </li>
              <li>
                <a href="#!" className="text-reset">
                  Sub-Contractors
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="fw-bold title text-uppercase text-gray-700">About</h6>

            <ul className="list-unstyled text-muted mb-0">
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Who Is
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className="text-reset">
                  Team
                </a>
              </li>
              <li>
                <a href="#!" className="text-reset">
                  Press
                </a>
              </li>
              <li>
                <a href="#!" className="text-reset">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
