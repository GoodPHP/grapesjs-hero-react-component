import React from "react";

class Title extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { props } = this;
    const { children } = props;

    return (
      <h1 className="hero-title">{children}</h1>
    );
  }
}

export default Title;
