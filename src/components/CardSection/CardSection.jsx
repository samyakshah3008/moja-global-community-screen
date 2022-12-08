import React, { Component } from "react";
import CommunityCard from "../CommunityCard/CommunityCard";
import CommunityCard2 from "../CommunityCard/CommunityCard2";
import "./CardSection.css";
import Carousel from "better-react-carousel";

export default function CardSection() {
  return (
    <>
      <Carousel
        responsiveLayout={[
          {
            breakpoint: 800,
            cols: 2,
            rows: 1,
            gap: 10,
            loop: true,
            autoplay: 2000,
          },
          {
            breakpoint: 1600,

            loop: true,
            autoplay: 2000,
          },
          {
            breakpoint: 600,
            cols: 1,
            rows: 1,
            gap: 10,
            loop: true,
            autoplay: 2000,
          },
        ]}
        cols={3}
        rows={1}
        gap={10}
        loop
      >
        <Carousel.Item>
          <CommunityCard />
        </Carousel.Item>
        <Carousel.Item>
          <CommunityCard2 />
        </Carousel.Item>
        <Carousel.Item>
          <CommunityCard />
        </Carousel.Item>
        <Carousel.Item>
          <CommunityCard />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
