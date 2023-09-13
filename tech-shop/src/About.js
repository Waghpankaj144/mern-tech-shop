import React from "react";
import "./styles/floatImage.css";
// import HeroSection from "./components/HeroSection";

const About = () => {
  return (
    <>
      <div className="image-float-container">
        <img className="left-image" src="images/banner.jpg" alt="Left Image" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          dignissim libero. Fusce eleifend leo vel purus vehicula, at fringilla
          turpis gravida. Duis tristique venenatis orci, ac malesuada quam
          congue et.
        </p>
        <img
          className="right-image"
          src="images/banner2.jpg"
          alt="Right Image"
        />
        <p>
          Nullam eget neque a elit vehicula venenatis. Sed ut sapien ac elit
          malesuada condimentum. Sed nec ligula at justo feugiat vestibulum.
          Donec vitae dolor eget odio convallis scelerisque vel in quam. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Dicta blanditiis
          corporis atque sed, sit laboriosam tempora? Molestiae alias facilis,
          nemo saepe perferendis aliquam earum, dolor nobis fugit asperiores
          natus amet repudiandae voluptatum a qui nulla. Rem nulla iste culpa
          dolore eos hic, tempore pariatur et suscipit deleniti aliquid sint
          harum totam quo architecto eius incidunt id? Esse totam in quibusdam
          et unde enim aut delectus magni. Possimus consequatur, enim
          perferendis quasi repudiandae, omnis dolorem deserunt laudantium hic
          adipisci quia. Veritatis tempora, quibusdam error omnis, temporibus
          officiis maxime eligendi dolore nulla, numquam illo libero quo
          aliquid. Assumenda amet tempora repudiandae eum.
        </p>
      </div>
    </>
  );
};

export default About;
