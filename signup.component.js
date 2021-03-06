import React, { Component } from "react";
import axios from "axios"

class SignUp extends Component {



    constructor(props) {
        super (props)

        this.state ={
            firstName:'',
            lastName :'',
            email:'',
            password: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('/sign-up',this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            }
            
        )
            this.props.history.push('/sign-in')

        }
    
   
    render() {
        const{firstname,lastname,email,password} = this.state

        return (
            <form onSubmit={this.submitHandler} >
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                     <input 
                    type="text" 
                    name ="firstname"
                    className="form-control" 
                    placeholder="Enter First Name" 
                    value={firstname} 
                    onChange={this.changeHandler}  />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                     <input 
                    type="text" 
                    name ="lastname"
                    className="form-control" 
                    placeholder="Enter Last Name" 
                    value={lastname} 
                    onChange={this.changeHandler}  />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                     <input 
                    type="email" 
                    name ="email"
                    className="form-control" 
                    placeholder="Enter email" 
                    value={email} 
                    onChange={this.changeHandler}  />
                </div>

                <div className="form-group">
                    <label>Password</label>
                     <input 
                    type="password" 
                    name ="password"
                    className="form-control" 
                    placeholder="Enter Password" 
                    value={password}
                    onChange={this.changeHandler}  />
                </div>

                <button type="submit" className="btn btn-primary btn-block" action ="detail">Sign Up</button>

            </form>
        )
    }
}


export default (SignUp)