import * as React from 'react';
import './style.css';
import {useState} from 'react';

export default function App() {
  const friendsArray = [
    {
        name: "John",
        age: 19,
    },
    {
        name: "Candy",
        age: 18,
    },
    {
        name: "mandy",
        age: 20,
    },
]; const [friends, setFriends] = useState(friendsArray); // Setting default value

const handleAddFriend = () => {
  setFriends((prevFriends) => [
    ...prevFriends,
    {
        name: "Random Friend Name",
        age: 20, // Random age
    },
]);
};

return (
    <main>
        <ul>
            // Mapping over array of friends
            {friends.map((friend, index) => (
                // Setting "index" as key because name and age can be repeated, It will be better if you assign uniqe id as key
                <li key={index}>
                    <span>name: {friend.name}</span>{" "}
                    <span>age: {friend.age}</span>
                </li>
            ))}
            <button onClick={handleAddFriend}>Add Friends</button>
        </ul>
    </main>
);

}
