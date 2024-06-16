import React, { useState } from 'react'

export default function ForgetPassword() {

    const [email,Setemail]=useState()

    const handleclick=async(e)=>
        {
            console.log("the email for forgot password is:",email)
                e.preventDefault()
                const response =await fetch('http://localhost:4000/user/forgotpassword/',
                    {
                        mode:'cors',
                        method:'POST',
                        headers:{
                            "Content-Type":'application/json'
                        },
                        body:JSON.stringify({email})
                    }
                    
                )
                const json=await response.json()
                if(json.success)
                    {
                        console.log("the token has been sent now redirect to password reset page")
                    }
                    else{
                        alert(json.message)
                    }
        }

    
  return (
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" name='email'>Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={email} onChange={(e)=>Setemail(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
 
  <button type="button" class="btn btn-primary" onClick={handleclick}>click to get token</button>
</form>
  )
}
