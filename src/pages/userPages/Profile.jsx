// import React from 'react'

import {useLoaderData} from "react-router-dom";
import userServices from "../../services/userServices";

import { useState } from "react";


export const loader= async()=> {
  // get the currently logged in user
  const user = await userServices.getCurrentUser();

  // return the user
  return { user };
}
function Profile() {

  const { user } = useLoaderData();
  const [curUser, setCurUser] = useState(user.data.user);
  return (
    <div>
      {user ? (
        <div>
          <h2>User Profile</h2>
          <p>Name: {curUser.name}</p>
          <p>Email: {curUser.username}</p>
          <p>Location: {curUser.location}</p>
          <p>Role: {curUser.role}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Profile;