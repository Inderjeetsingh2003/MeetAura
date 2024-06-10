import React, { useState } from 'react'

export default function Singup() {
 const[singupcredentials,setsingupcredentials]=useState({name:'',email:'',password:'',confirmpassword:''})

 const handleclick=async(e)=>
    {
        e.preventDefault()
        if(singupcredentials.password===singupcredentials.confirmpassword)
            {
                const response=await fetch('http://localhost:4000/user/signup',{
                    mode:'cors',
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({'name':singupcredentials.name,'email':singupcredentials.email,'password':singupcredentials.password})
                })

                const json=await response.json()
                if(json.success)
                    {
                        console.log("singup successfully done")
                        console.log(json.accesstoken)

                    }
                    else{
                        alert(json.message)
                    }
            }
            else{
                alert('password and confirmm password do not match')
            }
    }



const handleonchange=(e)=>
    {
        setsingupcredentials({...singupcredentials,[e.target.name]:e.target.value})
    }

  return (
   <>
   <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name'value={singupcredentials.name} onChange={handleonchange}/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'value={singupcredentials.email} onChange={handleonchange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password'value={singupcredentials.password} onChange={handleonchange}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">confirm password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='confirmpassword'value={singupcredentials.confirmpassword} onChange={handleonchange}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="button" className="btn btn-primary" onClick={handleclick}>Submit</button>
</form>
   </>
  )
}
