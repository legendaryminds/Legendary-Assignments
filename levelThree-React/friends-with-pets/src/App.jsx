import { useState } from 'react'
import './App.css'
import FriendList from './FriendList'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FriendList />
      </header>
    </div>
  );
}