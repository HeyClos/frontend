import React, { Component } from 'react'
import axios from "axios";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
    
          username: '',
    
          password: ''
    
        };
      }

      // add change handler function
      // Does this one work? What should i change value to? username or password?
      handleChange = event => {
        this.setState({
          [event.target.name] : event.target.value
        });
      };
    


      // submit login info function
      loginSubmit = () => {
        axios
            .post('https://life-gpa-be.herokuapp.com/api/login', this.state )
            .then(response => {
                console.log(response)
              localStorage.setItem('username', response.data.token)
              })
            .catch(err => {
                console.log(err.message)
                })
        }

        render() {
            return (
                <div>
                    <form onSubmit={() => this.loginSubmit} >
                        <input 
                        type='text'
                        onChange={this.changeHandler}
                        name='username'
                        placeholder='Username.'
                        />
                        
                        <input 
                        type='text'
                        onChange={this.changeHandler}
                        name='password'
                        placeholder='Password.'
                        />
                        <button> Log in
                        </button>
                    </form>
                    
                </div>
        )
    }
}

