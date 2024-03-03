import React from "react";

class Container extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { props } = this;
    const { children } = props;

    return (
      <div className="hero-copy">
        {children}
      </div>
    );
  }
}

export default Container;
