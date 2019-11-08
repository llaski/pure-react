import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import "./index.css";
import PropTypes from "prop-types";

const Tweet = ({ tweet }) => {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} />
        <Time time={tweet.time} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
};

Tweet.propTypes = {
  tweet: PropTypes.object
};

const Avatar = ({ hash }) => {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} alt="avatar" className="avatar" />;
};

Avatar.propTypes = {
  hash: PropTypes.string
};

const Message = ({ text }) => {
  return <div className="message">{text}</div>;
};

Message.propTypes = {
  text: PropTypes.string
};

const Author = ({ author: { name, handle } }) => {
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
};

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired
  }).isRequired
};

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

Time.propTypes = {
  time: PropTypes.string
};

const ReplyButton = () => <i className="fa fa-reply reply-button"></i>;

const RetweetButton = ({ count }) => {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet"></i>
      {count > 0 && <span className="retweet-count">{count}</span>}
    </span>
  );
};

const LikeButton = ({ count }) => {
  return (
    <span className="like-button">
      <i className="fa fa-heart"></i>
      {count > 0 && <span className="like-count">{count}</span>}
    </span>
  );
};

LikeButton.propTypes = {
  count: PropTypes.number
};

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"></i>
);

const testTweet = {
  message: "Something about cats.",
  gravatar: "c284c353cc220593f8434b327abfa6e2",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 1,
  timestamp: "2016-07-30 21:24:37"
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
