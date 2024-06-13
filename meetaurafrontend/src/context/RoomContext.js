import { createContext, useState } from "react";

const Roomcontext = createContext();

const Roomprovider = (props) => {

    const[PublicRooms,SetPublicRooms]=useState()
    const host=`http://localhost:4000/room`
    const getpublicrooms=async()=>
        {
            console.log("get public room is gettng called")
            const response= await fetch(`${host}/getallpublicrooms`,
                {
                    mode:'cors',
                    method:'GET',
                    headers:{
                        'Content-TYPE':'application/json',
                        'access-token':localStorage.getItem('user-token')
                    }
                }
            )
            //console.log(response)
            const json=await response.json()
            //console.log(json)
            if(json.success)
                {
                    console.log("in the room context",json.rooms)
                    SetPublicRooms(json.rooms)
                }
                else{
                    alert(json.message)
                }
        }


  return <Roomcontext.Provider value={{getpublicrooms,PublicRooms}}>{props.children}</Roomcontext.Provider>;
};

export{Roomcontext,Roomprovider}