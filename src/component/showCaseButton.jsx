import React from "react";
import PropTypes from "prop-types";

const ShowcaseButton = props => {
  const { buttonContent, onClick } = props;
  return (
    <button className="showcase-button" onClick={onClick}>
      {buttonContent}
    </button>
  );
};
ShowcaseButton.propTypes = {
  buttonContent: PropTypes.string,
  onClick: PropTypes.func.isRequired
};
export default ShowcaseButton;
