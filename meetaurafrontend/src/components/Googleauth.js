import React from 'react';
import { app } from './FireBase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import   '../css/googlebutton.css'// Import the CSS file
import { useNavigate } from 'react-router-dom';

export default function Googleauth() {
  const auth = getAuth(app);
const navigate=useNavigate()
  const handlegoogleclick = async () => {
    const url = `http://localhost:4000/user/googlelogin`;
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultfromgoogle = await signInWithPopup(auth, provider);
      console.log(resultfromgoogle.user.displayName, resultfromgoogle.user.email, resultfromgoogle.user.photoURL);
      
      const response = await fetch(url, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({
          'name': resultfromgoogle.user.displayName,
          'email': resultfromgoogle.user.email,
          'photolink': resultfromgoogle.user.photoURL
        })
      });
      
      const json = await response.json();
      if (json.success) {
        console.log("Continue with Google successful");
        console.log("Access token:", json.accesstoken);
        localStorage.setItem('user-token',json.accesstoken)
        navigate('/home')

      } else {
        alert(json.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button type="button" className="google-button" onClick={handlegoogleclick}>
      <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="Google logo" />
      Continue with Google
    </button>
  );
}

















// import React from 'react'
// import { app } from './FireBase'
// import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
// export default function Googleauth() {
//     const auth= getAuth(app);
// const handlegoogleclick=async()=>
//     {
//         const url =`http://localhost:4000/user/googlelogin`
        

//         const provider= new GoogleAuthProvider()
//         provider.getCustomParameters({prompt:"select_account"})
//         try {
//     const resultfromgoogle=await signInWithPopup(auth,provider) ;  
//     console.log(resultfromgoogle.user.displayName,resultfromgoogle.user.email,resultfromgoogle.user.photoURL)

    
//     const response=await fetch(url,{
//         mode:'cors',
//         method:'POST',
//         headers:{
//             'Content-Type':"application/json"
//         },
//         body:JSON.stringify({'name':resultfromgoogle.user.displayName,'email':resultfromgoogle.user.email,'photolink':resultfromgoogle.user.photoURL})

//     })

//     const json=await response.json()
//     if(json.success)
//         {
//             console.log("continue with google successfull")
//             console.log("access token:",json.accesstoken)
//         }
//         else{
//             alert(json.message)
//         }

//         } 
//         catch (error) {
//             console.log(error)
//         } 
//        }
    
//   return (
//     <button  type="button"onClick={handlegoogleclick}>continue with google</button>
//   )
// }
