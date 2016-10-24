import React from 'react';
import { Link } from 'react-router';

function InputName({ updateUserName, User, history }) {

  function handleClick(event) {
    event.preventDefault();
    updateUserName(event);
    history.push('/page2');
  }

  return (
    <div>
      <form onSubmit={(e) => { handleClick(e) }}>
        <input type="text" placeholder="Enter your Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function Root() {
  return (
    <div>
      <p>Hello and Welcome to the Demo</p>
    </div>
  );
}

function Home(props) {
  return (
    <div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/page1">Page 1</Link></li>
      </ul>
      {React.cloneElement(props.children, props)}
    </div>
  );
}

function Page2(props) {
  return (
    <div>
      <h1>This is a parameter passed by the previous route</h1>
      <p>{props.reduxStore.username}</p>
    </div>
  );
}

function Page1(props) {
  return (
    <div>
      <InputName updateUserName={props.updateUserName} User={props.reduxStore.username} history={props.history} />
    </div>
  );
}

module.exports = { Home, InputName, Page2, Page1, Root };
