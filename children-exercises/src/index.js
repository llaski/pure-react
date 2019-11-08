import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  return (
    <>
      <ErrorBox>Something has gone wrong</ErrorBox>
      <FirstChildOnly>
        <ErrorBox>One has gone wrong</ErrorBox>
        <ErrorBox>Two has gone wrong</ErrorBox>
        <ErrorBox>Three has gone wrong</ErrorBox>
      </FirstChildOnly>
      <LastChildOnly>
        <ErrorBox>One has gone wrong</ErrorBox>
        <ErrorBox>Two has gone wrong</ErrorBox>
        <ErrorBox>Three has gone wrong</ErrorBox>
      </LastChildOnly>
      <Head number={2}>
        <ErrorBox>One has gone wrong</ErrorBox>
        <ErrorBox>Two has gone wrong</ErrorBox>
        <ErrorBox>Three has gone wrong</ErrorBox>
        <ErrorBox>Four has gone wrong</ErrorBox>
        <ErrorBox>Five has gone wrong</ErrorBox>
      </Head>
      <Tail number={2}>
        <ErrorBox>One has gone wrong</ErrorBox>
        <ErrorBox>Two has gone wrong</ErrorBox>
        <ErrorBox>Three has gone wrong</ErrorBox>
        <ErrorBox>Four has gone wrong</ErrorBox>
        <ErrorBox>Five has gone wrong</ErrorBox>
      </Tail>
    </>
  );
};

const ErrorBox = ({ children }) => {
  return (
    <div className="alert alert-danger error-box">
      <i className="fa fa-exclamation-triangle" />
      {children}
    </div>
  );
};

const FirstChildOnly = ({ children }) => {
  return <div>First Child: {React.Children.toArray(children).slice(0, 1)}</div>;
};

const LastChildOnly = ({ children }) => {
  return <div>Last Child: {React.Children.toArray(children).slice(-1)[0]}</div>;
};

const Head = ({ number, children }) => {
    return (
      <div>Head: {React.Children.toArray(children).slice(0, number)}</div>
    );
}
const Tail = ({ number, children }) => {
  return <div>Head: {React.Children.toArray(children).slice(-number)}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
