import React from "react";
import { Link } from "react-router-dom";

export function SideBar() {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SP <sup></sup>
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        <Link to="/">
          <li className="nav-item active">
            <a className="nav-link">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>
        </Link>

        <hr className="sidebar-divider" />

        <li className="nav-item active">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i class="fas fa-gas-pump"></i>

            <span>Petrol Station</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">SP Petrol Station Info</h6>
              <Link to="/newPetrolStation">
                <a className="collapse-item">Add Petrol Station</a>
              </Link>
              <Link to="/allStation">
                <a className="collapse-item">All Petrol Stations</a>
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item active">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i class="fas fa-chart-pie"></i>
            <span>Transaction</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Transaction info</h6>
              <Link to="/servicePayment">
                <a className="collapse-item" href="utilities-color.html">
                  service
                </a>
              </Link>
              <Link to="/fuelPayment">
                <a className="collapse-item" href="utilities-border.html">
                  Fuel
                </a>
              </Link>
            </div>
          </div>
        </li>

        <Link to="/service">
          <li className="nav-item active">
            <a className="nav-link">
              <i class="fas fa-taxi"></i>
              <span>Services</span>
            </a>
          </li>
        </Link>
      </ul>
    </>
  );
}
