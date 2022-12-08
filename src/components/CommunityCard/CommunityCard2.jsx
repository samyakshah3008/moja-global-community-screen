import React from "react";
import "./CommunityCard.css";
import Carousel from "better-react-carousel";

export default function CommunityCard2() {
  return (
    <>
      <div className="community-card position-down">
        <div className="ellipse-container">
          <div className="ellipse"></div>
          <div className="ellipse"></div>
          <div className="ellipse"></div>
        </div>
        <div className="border-line"></div>
        <div className="community-card-body">
          <div className="card-body-header">Getting Started</div>
          <div className="card-body-pills">Introduction to Moja Global</div>
          <div className="card-body-pills">Introduction to Moja Global</div>
          <div className="card-body-pills">Introduction to Moja Global</div>
          <div className="card-body-pills">Introduction to Moja Global</div>
          <div className="card-body-pills">Introduction to Moja Global</div>
        </div>
      </div>
    </>
  );
}
