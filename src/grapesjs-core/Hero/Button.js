import React from "react";

class Button extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { props } = this;
    const { buttonText } = props;

    return (
      <button
        className="button button-primary"
        onClick={() => {
          console.log("hi");
        }}
      >
        {buttonText}
      </button>
    );
  }
}

export default Button;
