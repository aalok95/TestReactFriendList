import React from "react";
import { render } from "react-dom";

class AddNewFriend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newFriend: ""
    };

    this.setNewFriend = this.setNewFriend.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  setNewFriend(e) {
    this.setState({
      newFriend: e.target.value
    });
  }

  addFriend() {
    this.props.addNew(this.state.newFriend);
    this.setState({ newFriend: "" });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newFriend}
          onChange={this.setNewFriend}
        />
        <button onClick={this.addFriend}> Add Friend</button>
      </div>
    );
  }
}

class ShowList extends React.Component {
  render() {
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {this.props.friends.map((friend) => {
            return <li>{friend}</li>;
          })}
        </ul>
      </div>
    );
  }
}

class FriendListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "Saurabh Agrawal",
      friendList: ["Saurabh Agrawal", "Soru Agrawal", "Aalok Garg"]
    };

    this.addFriend = this.addFriend.bind(this);
  }

  addFriend(friend) {
    this.setState(state => ({
      friendList: state.friendList.concat([friend])
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.user}</h1>
        <AddNewFriend addNew={this.addFriend} />
        <ShowList friends={this.state.friendList} />
      </div>
    );
  }
}

render(<FriendListContainer />, document.getElementById("root"));
