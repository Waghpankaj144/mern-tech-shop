import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <h2 >Welcome To</h2>
            <h1> {name} </h1>
            <p style={{ fontWeight: "600", fontSize: "15px" }}>
              "Discover Cutting-Edge Tech Treasures at Your Fingertips: Shop the
              Latest Gadgets and Gizmos on our Premier E-Commerce Tech Store!"
            </p>
            <NavLink to={"/products"}>
              <Button>shop now</Button>
            </NavLink>
          </div>

          <div className="hero-section-image">
            <figure>
              <img
                src="images/banner2.jpg"
                alt="hero-section"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
  
      text-transform: capitalize;
      font-weight: bold;
    }
    h2{
        margin-right : 300px;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  Button{
      color: blue;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
