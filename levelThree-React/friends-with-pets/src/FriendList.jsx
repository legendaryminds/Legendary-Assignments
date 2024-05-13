import React from 'react';
import Friend from './Friend'
import { friends } from '../data'  // Importing from data.jsx

export default function FriendList() {
    return (
        <div>
            {friends.map((friends) => (<Friend name={friends.name} age={friends.age} pets={friends.pets} />))}
        </div>
    )
}