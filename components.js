import React from 'react';
import { Link } from 'react-router';

function InputName({ updateUserName, User }) {
  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); updateUserName(e) }}>
        <input type="text" placeholder="Enter your Name" />
        <button type="submit">Submit</button>
      </form>
      <p>{User}</p>
    </div>
  );
}

function Root() {
  return (
    <div>
      <h1>Root it!</h1>
    </div>
  );
}

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('home props', this.props);
    return (
      <div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/page1">Page 1</Link></li>
        </ul>
        <div>Welcome to the home demo</div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

function Page2({ params }) {
  return (
    <div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/page1">Page 1</Link></li>
      </ul>
      <h1>This is a parameter passed by the previous route</h1>
      <p>{params.user}</p>
    </div>
  );
}

const Page1 = (props) => {
  console.log('Page1 props', props);
  return (
    <div>
      <InputName updateUserName={props.updateUserName} User={props.reduxStore.username} />
    </div>
  );
}
        //
        // <InputName onclick={this.updateUser} User={this.state.UserName} />

module.exports = { Home, InputName, Page2, Page1, Root };
