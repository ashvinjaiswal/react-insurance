import React, { useState } from "react";
import { useGlobalContext } from "./context/context";

const AddonCard = ({ addon, id }) => {
  const { title, text: desc, monthlyPrice, annualPrice } = addon;
  const [isActive, setActive] = useState(false);
  const { isMonthly, addAddon, removeAddon } = useGlobalContext();
  return (
    <>
      <div className={`addon ${isActive ? "active" : ""}`}>
        <div className="addon-info">
          <h4>{title}</h4>
          <span className="addon-price">
            £
            {isMonthly
              ? monthlyPrice + " per month"
              : annualPrice + " per year"}
          </span>
        </div>
        <p>{desc}</p>
        <button
          className="btn"
          onClick={() => {
            if (isActive) {
              removeAddon(id);
            } else {
              addAddon({ id, monthlyPrice, annualPrice });
            }
            setActive(!isActive);
          }}
        >
          {isActive ? "Remove this extra" : "Select this extra"}
        </button>
      </div>
    </>
  );
};

export default AddonCard;
