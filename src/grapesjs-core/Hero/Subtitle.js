import React from "react";

class Subtitle extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { props } = this;
    const { children } = props;

    return (
      <p className="hero-paragraph">{children}</p>
    );
  }
}

export default Subtitle;
