import React, { Component } from 'react';
// [..]
import {
  handleInput,
  connectToChatkit,
} from './methods';
import Dialog from './components/Dialog';

import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      showLogin: true,
      isLoading: false,
      currentUser: null,
      currentRoom: null,
      rooms: [],
      roomUsers: [],
      roomName: null,
      messages: [],
      newMessage: '',
    }
    this.handleInput = handleInput.bind(this);
    this.connectToChatkit = connectToChatkit.bind(this);

  }

  render() {
    const {
      userId,
      showLogin,
      rooms,
      currentRoom,
      currentUser,
      messages,
      newMessage,
      roomUsers,
      roomName,
    } = this.state;

    return (
      <div className="App">
            <aside className="sidebar left-sidebar">
              {currentUser ? (
                <div className="user-profile">
                  <span className="username">{currentUser.name}</span>
                  <span className="user-id">{`@${currentUser.id}`}</span>
                </div>
              ) : null}
            </aside>
            <section className="chat-screen">
             // [..]
            </section>
            <aside className="sidebar right-sidebar">
              {showLogin ? (
                <Dialog
                  userId={userId}
                  handleInput={this.handleInput}
                  connectToChatkit={this.connectToChatkit}
                />
              ) : null}
            </aside>
          </div>
    );
  }
}

export default App;