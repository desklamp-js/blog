import React from 'react';
import { Link } from 'react-router';

function InputName({ onclick, User }) {
  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); onclick(e); }}>
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

 export function Page2({ params }) {
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

class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(e) {
    const event = e.nativeEvent;
    const newUser = event.target[0].value;
    // const newState = Object.assign({}, this.state, { UserName: newUser });
    // this.setState(newState);

    // call updateUsername action passed down from Reux.
    // this.props.updateUsername(newUser);

    //go to next page
    // this.props.history.push(`/page2/${newUser}`);
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/home">Home</Link></li>
        </ul>
        <InputName onclick={this.updateUser} />
      </div>
    );
  }
}
        //
        // <InputName onclick={this.updateUser} User={this.state.UserName} />

module.exports = { Home, InputName, Page2, Page1, Root };
