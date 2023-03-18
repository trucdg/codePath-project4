import React from "react";
import "./HistoryGallery.css";

const HistoryGallery = ({ images }) => {
  return (
    <div className="gallery col">
      <h3>History Gallery</h3>
      <div className="history-container">
        <ul>
          {images ? (
            images.map((image) => {
              return (
                <li>
                  <img className="gallery-image" src={image} />
                  <p>cattie</p>
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
