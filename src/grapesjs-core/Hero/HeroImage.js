import React from "react";

class HeroImage extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { props } = this;
    const { children, src, alt } = props;

    return (
      <div className="hero-figure">
        <img className="hero-image" alt={alt} src={src} />
        {children}
      </div>
    );
  }
}

export default HeroImage;
