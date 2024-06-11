import React from 'react';
import { app } from './FireBase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import   './googlebutton.css'// Import the CSS file

export default function Googleauth() {
  const auth = getAuth(app);

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
      } else {
        alert(json.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button type="button" className="google-button" onClick={handlegoogleclick}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Google_2015_logo.svg" alt="Google logo" />
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
