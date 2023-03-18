import React from "react";
import "./BanList.css";
const BanList = ({ banList }) => {
  return (
    <div className="ban-list col">
      <h3>Ban List</h3>
      <div>
        {banList ? (
          banList.map((banItem, index) => {
            return <button key={index}>{banItem}</button>;
          })
        ) : (
          <p> Ban list is empty</p>
        )}
      </div>
    </div>
  );
};

export default BanList;
