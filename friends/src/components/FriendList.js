import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../auth/AxiosWithAuth';
import Friend from './Friend';


// In your FriendsList component, rendered with <ProtectedRoute />, you will create a list of your friends that you get from the API.

function FriendList() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then((res) => {
                //console.log(res);
                setFriends(res.data);
            })
            .catch((err) => console.log(err));
    });
    return (
        <div>
            {friends.map((friend) => {
                return <Friend key={friend.id} friend={friend} />;
            })}
        </div>
    );
}

export default FriendList;