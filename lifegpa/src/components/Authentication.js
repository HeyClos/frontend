import React from 'react'
import axios from "axios";

// 1. Learn how to do a register using axios.post to create a new user to login with
// 2. then login using axios.post
// 3. then when your login is successful, send the token that you will be receiving to headers
// 4. after that every get request you make should point to the token from the local storage

// How is a register different than a regular axios post?
// How od i get Login to render in a different page?
// How do I get/create a token? How do i send it to headers?
// What is headers used for? Where should headers live? 
// How do I point my requests to the token from the local storage? 

axios
  .post("https://life-gpa-be.herokuapp.com/api/habits", quote)
  .then(response => {
    console.log(response);
    this.setState({
      postSuccessMessage: response.data.successMessage, //should this not take me to my app after login is successful?
      postError: ""
    });
  })
  .catch(err => {
    console.log(err);
    this.setState({
      postSuccessMessage: "",
      postError: err.response.data.Error
    });
  });


// {
//   headers: {
//     Authorization: localStorage.token
//   }
// }