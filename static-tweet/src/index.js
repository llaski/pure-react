import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Tweet = () => {
  return (
    <div className="tweet">
      <Avatar /><Time />
      <div className="content">
        <Author />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
};

const Avatar = () => {
  return (
    <img
      src="https://www.gravatar.com/avatar/nothing"
      alt="avatar"
      className="avatar"
    />
  );
};

const Message = () => {
  return <div className="message">This is less than 140 characters.</div>;
};

const Author = () => {
  return (
    <span className="author">
      <span className="name">Your Name</span>
      <span className="handle">@yourhandle</span>
    </span>
  );
};

const Time = () => <span className="time">3h ago</span>;

const ReplyButton = () => <i className="fa fa-reply reply-button"></i>;

const RetweetButton = () => <i className="fa fa-retweet retweet-button"></i>;

const LikeButton = () => <i className="fa fa-heart like-button"></i>;

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"></i>
);

ReactDOM.render(<Tweet />, document.querySelector("#root"));
