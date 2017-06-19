import React,{Component} from 'react';
 class SignUp extends Component{
   render(){
     return(
       <div className="form-inline">
       <h2>Sign up</h2>
       <div className="form-group">
       <input className="form-control"
       type="text"
       placeholder="email"/><br/>
       <input className="form-control"
       type="password"
       placeholder="password" /><br/>

       <button className="btn btn-primary">
       Sign Up
       </button>
       </div>
        </div>
     );
   }
 }
 export default SignUp;
