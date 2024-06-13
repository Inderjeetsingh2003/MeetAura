import { Children, createContext, useState } from "react";

const Usercontext=createContext()

const UserProvider=(props)=>
    {
        const[userdetail,setuserdetail]=useState()
            const url=`http://localhost:4000/user/`
            

            const getuserdetails=async()=>
                {
                    const response=await fetch(`${url}/getuserdetails`,
                        {
                            mode:'cors',
                            method:'GET',
                            headers:{
                                'Content-Type':'application/json',
                                'access-token':localStorage.getItem('user-token')

                            }
                        }
                    )
                    const json=await response.json()
                    if(json.success)
                        {
                            console.log("it is loging in the user detail page inside the user context")
                            console.log(json.user)
                            setuserdetail(json.user)
                        }
                        else{
                            alert(json.message)
                        }

                }

        return <Usercontext.Provider value={{getuserdetails,userdetail}}>
                {props.children}
            </Usercontext.Provider>
        
    }
    export{UserProvider,Usercontext}