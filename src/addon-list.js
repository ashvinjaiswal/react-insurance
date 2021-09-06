import React, { useState, useEffect } from "react";
import AddonCard from "./addon";
import Loading from "./Loading";

const AddonCardList = () => {
  const [loading, setLoading] = useState(true);
  const [addons, setAddons] = useState([]);

  const fetchAddons = async () => {
    let url = "http://localhost:8000/addons";
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setAddons(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAddons();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }

  return (
    <div className="addons">
      {addons.map((addon, index) => {
        return <AddonCard addon={addon} key={index} id={index + 1} />;
      })}
    </div>
  );
};

export default AddonCardList;
