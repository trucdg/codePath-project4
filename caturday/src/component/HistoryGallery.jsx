import React from "react";
import "./HistoryGallery.css";

const HistoryGallery = ({ cats }) => {
  return (
    <div className="gallery col">
      <h3>History Gallery</h3>
      <div className="history-container">
        <ul>
          {cats && cats.length > 0 ? (
            cats.map((cat, index) => {
              return (
                <li key={index}>
                  <img className="gallery-image" src={cat.url} />
                  <p>
                    A {cat.breed} cat from {cat.origin}.
                  </p>
                </li>
              );
            })
          ) : (
            <li>
              <p>No Image yet</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HistoryGallery;
