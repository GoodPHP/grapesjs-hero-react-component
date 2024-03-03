import React from "react";
import Container from "./Container";
import HeroImage from "./HeroImage";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Button from "./Button";

class Hero extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { props } = this;
    const { children } = props;

    return (
      <main className="main">
        <section className="hero">
          <div className="container">
            <div className="hero-inner">
              {children}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Hero;
export { HeroImage, Container, Title, Subtitle, Button }
