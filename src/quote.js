import React from "react";
import { useGlobalContext } from "./context/context";

const QuoteInfo = ({ quote }) => {
  const {
    firstName,
    address1,
    address2,
    quoteRef,
    startDate,
    monthlyPrice,
    annualPrice,
  } = quote[0];

  // Use Context api
  const { isMonthly, toggleType, quoteData } = useGlobalContext();

  const showPrice = () => {
    if (isMonthly) {
      let qtotoal = quoteData
        .map((item) => item.monthlyPrice)
        .reduce((a, b) => a + b, 0);
      return (qtotoal + monthlyPrice).toFixed(2) + " per month";
    } else {
      let qtotoal = quoteData
        .map((item) => item.annualPrice)
        .reduce((a, b) => a + b, 0);
      return (qtotoal + annualPrice).toFixed(2) + " per year";
    }
  };

  return (
    <section className="quote">
      <div className="user-info">
        <h3>Hey {firstName},</h3>
        <p>
          Here is your quote for Royal & sun Alliance, {address1}, {address2}
        </p>
        <p>Quote reference: {quoteRef}</p>
        <p>Covers starts on {new Date(startDate).toLocaleDateString()}</p>
      </div>
      <div className="quote-info">
        <h4>
          <span>£{showPrice()}</span>
        </h4>
        <p>
          This price includes Insurance Premium Tax at the current rate. No
          charge for paying monthly
        </p>
        <button className="btn" onClick={toggleType}>
          Swith to Annual
        </button>
      </div>
    </section>
  );
};

export default QuoteInfo;
