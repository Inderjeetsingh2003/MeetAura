import React, { useState } from 'react'
import Googleauth from '../components/Googleauth'

export default function Login() {

    const [credentials,setcredentials]=useState({email:'',password:''})
    const handleclick=async(e)=>
        {
            e.preventDefault();
            const response=await fetch('http://localhost:4000/user/login',
                {
                    mode:"cors",
                    method:'POST',
                    headers:{
                        "Content-TYPE":"application/json"
                    },
                    body:JSON.stringify({"email":credentials.email,"password":credentials.password})
                }
            )

            const json=await response.json()
            if(json.success)
                {
                    console.log('login successfull')
                    console.log(json.accesstoken);
                }
                else{
                    alert(json.message)
                }
        }


const handleonchange=(e)=>
    {
        setcredentials({...credentials,[e.target.name]:e.target.value})
    }

  return (
    <div><form>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label"  >Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name="email" value={credentials.email} onChange={handleonchange}/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={handleonchange}/>
    </div>
    
    <button type="button" className="btn btn-primary" onClick={handleclick}>login</button>


    <Googleauth/>

  </form></div>
  )
}
