import React from "react";
import PropTypes from "prop-types";

const CommitMessage = ({ commit }) => {
  return <span className="commit-message">{commit.message}</span>;
};

CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
};

export default CommitMessage;
