import React from "react";
import "./PlainandBilling.scss";
import { creditcard } from "../../../../../assests";
import { Heading } from "../../../../../components";
import { Topbar } from "../../../../../components/common";

import { TiArrowSortedDown } from "react-icons/ti";

const PlainandBilling = () => {
  return (
    <>
      <Topbar />

      <div className="mt-4"></div>
      <Heading className="secondry">Plan and billing</Heading>

      <div className="payment-method">
        <h3>Payment method</h3>
        <div className="payment-method-container">
          <div className="payment-method-container-selectcard">
            <div className="payment-method-container-selectcard-card align-item-center">
              <img src={creditcard} alt="creditcard" />
              <TiArrowSortedDown />
            </div>
            <div className="payment-method-container-selectcard-number">
              <p>**** **** **** 6832</p>
            </div>
          </div>
          <h3>Change</h3>
        </div>
        <hr />
      </div>

      <div className="payment-method">
        <h3>Payment method</h3>
        <div className="payment-method-container">
          <div className="payment-method-container-selectcard">
            <div className="payment-method-container-selectcard-number">
              <p>contact@xyz.com</p>
            </div>
          </div>
          <h3>Change</h3>
        </div>
        <hr />
      </div>

      <div className="billing-history">
        <h3>Billing history</h3>

        <div className="billing-history-header">
          <p>Date</p>
          <p>Paid</p>
          <p>Invoice</p>
        </div>
        <hr />
        <div className="billing-history-bottom">
          <p>Apr 6,2023</p>
          <p>$40.00</p>
          <p>74749177</p>
        </div>
      </div>

      <div className="trial">
        <div className="trial-container">
          <div className="trial-container-content">
            <h5>
              Trial
              <span> Up to 10000</span>
            </h5>
            <p className="m-1">1 of 10000 employees used</p>
            <p>
              Email signature manage. Cross company signature templates and
              signature
            </p>
            <p className="mt-2">
              Your plan automatically renews on Apr 06, 2023
            </p>
            <p>It will be charged as one payment of $40 USD</p>
          </div>
          <div className="trial-container-btn">
            <button>Upgrade</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlainandBilling;
